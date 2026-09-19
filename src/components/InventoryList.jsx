export default function InventoryList({ inventory }) {
    return (
        <div>
            {inventory.map((item) => (
                <ul key={item.id}>
                    <li>{item.name}</li>
                    <li>{item.price}</li>
                </ul>
            ))}
        </div>
    )
}