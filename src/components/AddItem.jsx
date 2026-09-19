import { useState, useContext, useRef } from "react"
import { InventoryContext } from "../contexts/InventoryContext"
import { LOCATIONS } from "../App"

export default function AddItem() {
    const { addItem } = useContext(InventoryContext)
    const inputRef = useRef(null)

    const blankItem = {
        name: "",
        image: "",
        description: "",
        origin: "",
        price: 0.0,
        locations: []
    }

    const [itemData, setItemData] = useState({
        id: crypto.randomUUID(),
        ...blankItem
    })

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setItemData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleCheckbox = (e) => {
        const { name, checked } = e.target
        setItemData((prev) => prev.locations.includes(name) && !checked ? {
            ...prev,
            locations: [prev.locations.filter(loc => loc !== name)]
        } : {
            ...prev,
            locations: [...prev.locations, name]
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addItem(itemData)
        setItemData({
            id: crypto.randomUUID(),
            ...blankItem
        })
        inputRef.current.focus()
    }

    return (
        <div>
            <h3>Add Item</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={itemData.name} onChange={handleChange} ref={inputRef}/>
                <label htmlFor="image">Image</label>
                <input type="text" id="image" name="image" value={itemData.image} onChange={handleChange}/>
                <label htmlFor="description">Description</label>
                <input type="text" id="description" name="description" value={itemData.description} onChange={handleChange}/>
                <label htmlFor="origin">Origin</label>
                <input type="text" id="origin" name="origin" value={itemData.origin} onChange={handleChange}/>
                <label htmlFor="price">Price</label>
                <input type="number" step="0.01" id="price" name="price" value={itemData.price} onChange={handleChange}/>
                <ul>
                    {LOCATIONS.map((loc, i) => (
                        <li key={i}>
                            <label htmlFor={loc}>{loc}</label>
                            <input id={loc} type="checkbox" name={loc} checked={itemData.locations.includes(loc)} onChange={handleCheckbox} />
                        </li>
                    ))}
                </ul>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}