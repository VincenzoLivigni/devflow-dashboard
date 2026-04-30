import { createContext, useEffect, useState } from "react";

export const SnippetsContext = createContext()

export function SnippetsProvider({ children }) {

    // localStorage snippet
    const [snippets, setSnippets] = useState(() => {
        const saved = localStorage.getItem("snippets")
        return saved ? JSON.parse(saved) : []
    })

    useEffect(() => {
        localStorage.setItem("snippets", JSON.stringify(snippets))
    }, [snippets])

    // funzione aggiungi snippet
    function addSnippet(title, code) {
        if (!title.trim()) return;

        setSnippets(prev =>
            [...prev, {
                id: Date.now(),
                title: title.trim(),
                code: code.trim()
            }
            ])
    }

    // funzione modifica snippet
    function modifySnippet(id, title, newCode) {
        setSnippets(prev => prev.map((s) => s.id === id
            ? { ...s, title: title.trim(), code: newCode.trim() } : s
        ))
    }

    // funzione rimuovi snippet
    function deleteSnippet(id) {
        setSnippets(prev => prev.filter((s) => s.id !== id))
    }

    return (
        <SnippetsContext.Provider value={{
            snippets,
            addSnippet,
            modifySnippet,
            deleteSnippet
        }}>
            {children}
        </SnippetsContext.Provider>
    )
}