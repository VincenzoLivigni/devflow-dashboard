import { createContext, useCallback, useEffect, useState } from "react";
import useStorage from "../hooks/useStorage";

export const ProjectsContext = createContext()

export function ProjectsProvider({ children }) {

    // localStorage projects
    const [projects, setProjects] = useStorage("projects", [])


    // funzione aggiungi project
    const addProject = useCallback((title, description) => {
        if (!title.trim() || !description.trim()) return

        setProjects(prev =>
            [...prev,
            {
                id: Date.now(),
                title: title.trim(),
                description: description.trim()
            }
            ])
    }, [setProjects])

    // funzione modifica project
    const modifyProject = useCallback((id, title, description) => {
        setProjects(prev => prev.map((p) => p.id === id
            ? { ...p, title: title.trim(), description: description.trim() } : p
        ))
    }, [setProjects])

    // funzione rimuovi project
    const deleteProject = useCallback((id) => {
        setProjects(prev => prev.filter((p) => p.id !== id))
    }, [setProjects])

    return (
        <ProjectsContext.Provider value={{
            projects,
            addProject,
            modifyProject,
            deleteProject
        }}>
            {children}
        </ProjectsContext.Provider>
    )
}