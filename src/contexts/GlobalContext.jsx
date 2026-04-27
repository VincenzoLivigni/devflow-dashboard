import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext()

export function GlobalProvider({ children }) {

    // localStorage tasks
    const [tasks, setTasks] = useState(() => {
        const saved = localStorage.getItem("tasks")
        return saved ? JSON.parse(saved) : []
    })

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks])

    // localStorage snippet
    const [snippets, setSnippets] = useState(() => {
        const saved = localStorage.getItem("snippets")
        return saved ? JSON.parse(saved) : []
    })

    useEffect(() => {
        localStorage.setItem("snippets", JSON.stringify(snippets))
    }, [snippets])

    // funzione aggiungi task
    function addTask(title, priority) {
        if (!title.trim()) return;

        setTasks(prev =>
            [...prev, {
                id: Date.now(),
                title: title.trim(),
                completed: false,
                priority: priority
            }
            ])
    }

    // funzione toggle completamento task
    function toggleCompleted(id) {
        setTasks(prev => prev.map((t) => t.id === id
            ? { ...t, completed: !t.completed } : t
        )
        )
    }

    // funzione rimuovi task
    function deleteTask(id) {
        setTasks(prev => prev.filter((t) => t.id !== id))
    }

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

    // funzione rimuovi snippet
    function deleteSnippet(id) {
        setSnippets(prev => prev.filter((s) => s.id !== id))
    }

    return (
        <GlobalContext.Provider value={{
            tasks,
            snippets,
            addTask,
            deleteTask,
            toggleCompleted,
            addSnippet,
            deleteSnippet
        }}>
            {children}
        </GlobalContext.Provider>
    )
}