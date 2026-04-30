import { createContext, useEffect, useState } from "react";
import useStorage from "../hooks/useStorage";

export const TasksContext = createContext()

export function TasksProvider({ children }) {

    // localStorage task
    const [tasks, setTasks] = useStorage("tasks", [])

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

    // funzione modifica task
    function modifyTask(id, title, priority) {
        setTasks(prev => prev.map((t) => t.id === id
            ? { ...t, title: title.trim(), priority } : t
        ))
    }

    // funzione rimuovi task
    function deleteTask(id) {
        setTasks(prev => prev.filter((t) => t.id !== id))
    }

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