import { createContext, useCallback, useEffect, useState } from "react";
import useStorage from "../hooks/useStorage";

export const TasksContext = createContext()

export function TasksProvider({ children }) {

    // localStorage task
    const [tasks, setTasks] = useStorage("tasks", [])

    // funzione aggiungi task
    const addTask = useCallback((title, priority, projectId) => {
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
    }, [setTasks])

    // funzione toggle completamento task
    const toggleCompleted = useCallback((id) => {
        setTasks(prev => prev.map((t) => t.id === id
            ? { ...t, completed: !t.completed } : t
        )
        )
    }, [setTasks])

    // funzione modifica task
    const modifyTask = useCallback((id, title, priority) => {
        setTasks(prev => prev.map((t) => t.id === id
            ? { ...t, title: title.trim(), priority } : t
        ))
    }, [setTasks])

    // funzione rimuovi task
    const deleteTask = useCallback((id) => {
        setTasks(prev => prev.filter((t) => t.id !== id))
    }, [setTasks])

    return (
        <TasksContext.Provider value={{
            tasks,
            addTask,
            toggleCompleted,
            modifyTask,
            deleteTask,
        }}>
            {children}
        </TasksContext.Provider>
    )
}