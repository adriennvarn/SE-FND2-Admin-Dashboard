import React, { useState, useContext, useEffect } from "react"
import NavBar from "../components/NavBar"
import ShopSearch from "../components/ShopSearch"
import InventoryList from "../components/InventoryList"
import { InventoryContext } from "../contexts/InventoryContext"

export default function Store() {
    // filters
    const [search, setSearch] = useState("")
    const [locationFilter, setLocationFilter] = useState([])
    // main inventory object
    const { inventory } = useContext(InventoryContext)

    // filter on if an item includes the search query (case insensitive)
    // and is available at ALL selected filter locations.
    // compared with blank array in case inventory renders as null on initial load, causing filter to fail
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