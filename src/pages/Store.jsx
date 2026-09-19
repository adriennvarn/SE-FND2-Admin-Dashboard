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
            <div className="uk-flex uk-flex-column uk-flex-row@m uk-padding">
                <div className="uk-width-1-1 uk-width-1-4@m">
                    <ShopSearch search={search} setSearch={setSearch} locationFilter={locationFilter} setLocationFilter={setLocationFilter} />
                </div>
                <div className="uk-width-expand uk-width-1-1@m uk-margin-large-top uk-margin-remove-top@m">
                    <InventoryList inventory={filteredItems} />
                </div>
            </div>
        </>
    )
}