import { createContext, useState, useEffect } from "react"
import { useFetchData, useFetchDataMutation } from "../hooks/useFetchData"

const API_URL = "http://localhost:3000/inventory"

export const InventoryContext = createContext()

export function InventoryProvider({ children }) {
    // primary state
    const [inventory, updateInventory] = useState([])
    // basic fetch for GET and mutated fetch for everything else
    const { data } = useFetchData(API_URL)
    const { execute: updateItem } = useFetchDataMutation(API_URL)

    // load inventory on mount
    useEffect(() => {
        if (data) updateInventory(data)
    }, [data])

    // add items with CRUD
    async function addItem(item) {
        // call fetch mutation with post
        const savedItem = await updateItem({
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(item)
        })
        // update inventory state
        updateInventory(prev => {
            const currentArray = Array.isArray(prev) ? prev : []
            return [...currentArray, savedItem]
        })
    }

    // delete items with CRUD
    async function deleteItem(itemToDelete) {
        // call fetch mutation with delete and dynamic url (pointing to /id)
        await updateItem({
            method: "DELETE"
        }, `${API_URL}/${itemToDelete.id}`)
        //update inventory state
        updateInventory(prev => {
            const currentArray = Array.isArray(prev) ? prev : []
            return currentArray.filter(item => (
                item.id !== itemToDelete.id
            ))
        })
    }

    return (
        <InventoryContext value={{ inventory, addItem, deleteItem }} >
            {children}
        </InventoryContext>
    )
}