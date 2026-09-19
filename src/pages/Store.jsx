import React, { useState, useContext, useEffect } from "react"
import NavBar from "../components/NavBar"
import ShopSearch from "../components/ShopSearch"
import InventoryList from "../components/InventoryList"
import { InventoryContext } from "../contexts/InventoryContext"

export default function Store() {
    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState("")
    const { inventory, addItem } = useContext(InventoryContext)

    /////// temporarily populate list with items
    // useEffect(() => {
    //     addItem({
    //         id: crypto.randomUUID(),
    //         name: "Test Coffee",
    //         image: "",
    //         description: "Flavorful 0's and 1's",
    //         origin: "USA",
    //         price: 12.00
    //     })
    // }, [])

    const filteredItems = (inventory || []).filter((item) =>
        item.name?.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <>
            <NavBar />
            <ShopSearch />
            <InventoryList inventory={filteredItems} />
        </>
    )
}