import { useContext } from "react"
import { InventoryContext } from "../contexts/InventoryContext"

// displays the item list in a plain table for admin use
// includes a delete button to remove items
export default function AdminItemList() {
    const { inventory, deleteItem } = useContext(InventoryContext)

    return (
        <div className="uk-overflow-auto">
            <table className="uk-table uk-table-small uk-table-divider">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Orgin</th>
                        <th>Price</th>
                        <th>Locations Available</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {inventory.map(item => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>{item.origin}</td>
                            <td>{item.price}</td>
                            <td>{item.locations.join(", ")}</td>
                            <td><button onClick={() => deleteItem(item)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}