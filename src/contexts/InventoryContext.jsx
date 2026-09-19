import { createContext, useState, useEffect } from "react"
import { useLocalStorage } from "../hooks/useLocalStorage"

export const InventoryContext = createContext()

export function InventoryProvider({ children }) {
    const [inventory, updateInventory] = useLocalStorage("inventory", [])

    // safely add items
    function addItem(item) {
        updateInventory(prev => {
            const currentArray = Array.isArray(prev) ? prev : []
            return [...currentArray, item]
        })
    }

    // safely delete items
    function deleteItem(itemToDelete) {
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