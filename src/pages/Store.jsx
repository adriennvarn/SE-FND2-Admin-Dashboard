import React, { useState, useContext, useEffect } from "react"
import NavBar from "../components/NavBar"
import ShopSearch from "../components/ShopSearch"
import InventoryList from "../components/InventoryList"
import { InventoryContext } from "../contexts/InventoryContext"

export default function Store() {
    const [search, setSearch] = useState("")
    const [locationFilter, setLocationFilter] = useState([])
    const { inventory } = useContext(InventoryContext)

    const filteredItems = (inventory || []).filter((item) =>
        item.name?.toLowerCase().includes(search.toLowerCase()) &&
        locationFilter.every(val => item.locations.includes(val))
    )

    return (
        <>
            <NavBar />
            <ShopSearch search={search} setSearch={setSearch} locationFilter={locationFilter} setLocationFilter={setLocationFilter} />
            <InventoryList inventory={filteredItems} />
        </>
    )
}