import { useState, useContext, useRef } from "react"
import { InventoryContext } from "../contexts/InventoryContext"
import { LOCATIONS } from "../App"
import "./AddItem.css"

export default function AddItem() {
    const { addItem } = useContext(InventoryContext)
    // ref to focus back to name on submit
    const inputRef = useRef(null)

    // template item
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

    // update running itemData as values change
    const handleChange = (e) => {
        const { name, value } = e.target
        setItemData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    // update itemData.locations array based on if an item is being checked or unchecked
    const handleCheckbox = (e) => {
        const { name, checked } = e.target
        setItemData((prev) => prev.locations.includes(name) && !checked ? {
            ...prev,
            locations: prev.locations.filter(loc => loc !== name)
        } : {
            ...prev,
            locations: [...prev.locations, name]
        })
    }

    // submit form to db
    const handleSubmit = (e) => {
        e.preventDefault()
        // change the price to be a float of precisely 2 decimal places.
        // if image is blank, set to null. this is requested by react in place of using empty strings
        const formattedItem = {
            ...itemData,
            price: parseFloat(itemData.price).toFixed(2),
            image: !itemData.image ? null : itemData.image
        }
        // context call to add item to db
        addItem(formattedItem)
        // reset form and focus on name input
        setItemData({
            id: crypto.randomUUID(),
            ...blankItem
        })
        inputRef.current.focus()
    }

    return (
        <div>
            <h3>Add Item</h3>
            <form onSubmit={handleSubmit} className="uk-form">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={itemData.name} onChange={handleChange} ref={inputRef} />
                <label htmlFor="image">Image</label>
                <input type="text" id="image" name="image" value={itemData.image} onChange={handleChange} />
                <label htmlFor="description">Description</label>
                <input type="text" id="description" name="description" value={itemData.description} onChange={handleChange} />
                <label htmlFor="origin">Origin</label>
                <input type="text" id="origin" name="origin" value={itemData.origin} onChange={handleChange} />
                <label htmlFor="price">Price</label>
                <input type="number" step="0.01" id="price" name="price" value={itemData.price} onChange={handleChange} />
                <ul className="uk-list">
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