import { useContext } from "react"
import { InventoryContext } from "../contexts/InventoryContext"

export default function AdminItemList() {
    const { inventory, deleteItem } = useContext(InventoryContext)

    return (
        <div className="tg-wrap">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Orgin</th>
                        <th>Price</th>
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
                            <td onClick={() => deleteItem(item)}><strong>DelBtn</strong></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}