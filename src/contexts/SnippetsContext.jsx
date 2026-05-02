import { createContext, useCallback, useEffect, useState } from "react";
import useStorage from "../hooks/useStorage";

export const SnippetsContext = createContext()

export function SnippetsProvider({ children }) {

    // localStorage snippet
    const [snippets, setSnippets] = useStorage("snippets", [])

    // funzione aggiungi snippet
    const addSnippet = useCallback((title, code) => {
        if (!title.trim()) return;

        setSnippets(prev =>
            [...prev, {
                id: Date.now(),
                title: title.trim(),
                code: code.trim()
            }
            ])
    }, [setSnippets])

    // funzione modifica snippet
    const modifySnippet = useCallback((id, title, newCode) => {
        setSnippets(prev => prev.map((s) => s.id === id
            ? { ...s, title: title.trim(), code: newCode.trim() } : s
        ))
    }, [setSnippets])

    // funzione rimuovi snippet
    const deleteSnippet = useCallback((id) => {
        setSnippets(prev => prev.filter((s) => s.id !== id))
    }, [setSnippets])

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