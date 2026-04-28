import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext()

export function GlobalProvider({ children }) {

    // localStorage projects
    const [projects, setProjects] = useState(() => {
        const saved = localStorage.getItem("projects")
        return saved ? JSON.parse(saved) : []
    })

    useEffect(() => {
        localStorage.setItem("projects", JSON.stringify(projects))
    }, [projects])

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


    // funzione aggiungi project
    function addProject(title, description) {
        if (!title.trim() || !description.trim()) return

        setProjects(prev =>
            [...prev,
            {
                id: Date.now(),
                title: title.trim(),
                description: description.trim()
            }
            ])
    }

    // funzione modifica project
    function modifyProject(id, title, description) {
        setProjects(prev => prev.map((p) => p.id === id
            ? { ...p, title: title.trim(), description: description.trim() } : p
        ))
    }

    // funzione rimuovi project
    function deleteProject(id) {
        setProjects(prev => prev.filter((p) => p.id !== id))
    }

    // funzione aggiungi task
    function addTask(title, priority, projectId) {
        if (!title.trim()) return;

        setTasks(prev =>
            [...prev, {
                id: Date.now(),
                title: title.trim(),
                completed: false,
                priority: priority,
                projectId: projectId
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
        <GlobalContext.Provider value={{
            projects,
            tasks,
            snippets,
            addProject,
            modifyProject,
            deleteProject,
            addTask,
            deleteTask,
            toggleCompleted,
            addSnippet,
            modifySnippet,
            deleteSnippet
        }}>
            {children}
        </GlobalContext.Provider>
    )
}