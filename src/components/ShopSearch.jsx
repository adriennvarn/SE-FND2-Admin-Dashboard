import { LOCATIONS } from "../App"

export default function ShopSearch({ search, setSearch, locationFilter, setLocationFilter }) {
    const handleCheckbox = (e) => {
        const { name, checked } = e.target
        setLocationFilter(prev => prev.includes(name) && !checked ?
            prev.filter(loc => loc !== name) :
            [...prev, name]
        )
    }

    return (
        <div className="search-sidebar">
            <h3>Search</h3>
            <input type="text" id="search" name="search" placeholder="Search for your favorite" value={search} onChange={(e) => setSearch(e.target.value)}/>

            <h3>Filter by Location</h3>
            <form id="filter">
                <ul>
                    {LOCATIONS.map((loc, i) => (
                        <li key={i}>
                            <input type="checkbox" id={loc} name={loc} checked={locationFilter.includes(loc)} onChange={handleCheckbox} />
                            <label htmlFor={loc}>{loc}</label>
                        </li>
                    ))}
                </ul>
            </form>
        </div>
    )
}