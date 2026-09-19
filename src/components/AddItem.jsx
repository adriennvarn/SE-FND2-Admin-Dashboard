import { useState, useContext, useRef } from "react"
import { InventoryContext } from "../contexts/InventoryContext"

export default function AddItem() {
    const { addItem } = useContext(InventoryContext)
    const inputRef = useRef(null)

    const blankItem = {
        name: "",
        image: "",
        description: "",
        origin: "",
        price: 0.0
    }

    const [itemData, setItemData] = useState({
        id: crypto.randomUUID(),
        ...blankItem
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setItemData((prevData) => ({
            ...prevData,
            [name]: value
        }))
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
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}