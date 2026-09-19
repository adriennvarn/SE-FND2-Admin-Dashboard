import { useEffect, useState } from "react"

export function useLocalStorage(key, initialValue = null) {
    const [data, setData] = useState(() => {
        try {
            const saved = localStorage.getItem(key)
            return saved ? JSON.parse(saved) : initialValue
        }
        catch (err) {
            console.error("Failed parsing localStorage key:", key, err)
            return initialValue
        }
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(data))
    }, [key, data])

    return [data, setData]
}