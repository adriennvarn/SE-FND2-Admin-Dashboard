import React, { useState, useContext, useEffect } from "react"
import NavBar from "../components/NavBar"
import ShopSearch from "../components/ShopSearch"
import InventoryList from "../components/InventoryList"
import { InventoryContext } from "../contexts/InventoryContext"

export default function Store() {
    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState("")
    const { inventory, addItem } = useContext(InventoryContext)

    const filteredItems = (inventory || []).filter((item) =>
        item.name?.toLowerCase().includes(search.toLowerCase()) 
    )

    return (
        <>
            <NavBar />
            <ShopSearch setSearch={setSearch} setFilter={setFilter} />
            <InventoryList inventory={filteredItems} />
        </>
    )
}