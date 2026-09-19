export default function ShopSearch({ setSearch, setFilter }) {

    
    return (
        <div className="search-sidebar">
            <h3>Search</h3>
            <input type="text" id="search" name="search" placeholder="Search for your favorite" />

            <h3>Locations</h3>
            <form id="filter">
                <ul>
                    <li>
                        <input type="checkbox" id="Norfolk" name="Locations" value="norfolk" />
                        <label htmlFor="Norfolk">Norfolk</label>
                    </li>
                    <li>
                        <input type="checkbox" id="Chesapeake" name="Locations" value="chesapeake" />
                        <label htmlFor="Chesapeake">Chesapeake</label>
                    </li>
                    <li>
                        <input type="checkbox" id="Virginia Beach" name="Locations" value="vabeach" />
                        <label htmlFor="Virginia Beach">Virginia Beach</label>
                    </li>
                    <li>
                        <input type="checkbox" id="Hampton" name="Locations" value="hampton" />
                        <label htmlFor="Hampton">Hampton</label>
                    </li>
                </ul>
            </form>
        </div>
    )
}