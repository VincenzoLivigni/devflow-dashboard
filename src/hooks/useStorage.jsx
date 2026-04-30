import { useEffect, useState } from "react";

export default function useStorage(itemKey, initialValue) {

    const [value, setValue] = useState(() => {

        const saved = localStorage.getItem(itemKey)
        return saved ? JSON.parse(saved) : initialValue
    })

    useEffect(() => {
        localStorage.setItem(itemKey, JSON.stringify(value))
    }, [itemKey, value])

    return [value, setValue]
}