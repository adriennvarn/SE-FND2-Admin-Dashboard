import { LOCATIONS } from "../App"

export default function ShopSearch({ search, setSearch, locationFilter, setLocationFilter }) {
    // set location filter based on what boxes are checked
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
            <div className="uk-search uk-search-default">
                <input
                    className="uk-search-input"
                    type="text"
                    id="search"
                    name="search"
                    placeholder="Search for your favorites"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)} />
            </div>

            <h3>Filter by Location</h3>
            <div className="">
                <ul className="uk-list uk-grid uk-width-expand uk-align-center">
                    {LOCATIONS.map((loc, i) => (
                        <li key={i} className="uk-align-left uk-margin-small uk-margin@m">
                            <input type="checkbox" id={loc} name={loc} checked={locationFilter.includes(loc)} onChange={handleCheckbox} />
                            <label htmlFor={loc}>{loc}</label>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}