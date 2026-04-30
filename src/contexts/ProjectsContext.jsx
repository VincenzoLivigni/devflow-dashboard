import { createContext, useEffect, useState } from "react";

export const ProjectsContext = createContext()

export function ProjectsProvider({ children }) {

    // localStorage projects
    const [projects, setProjects] = useState(() => {
        const saved = localStorage.getItem("projects")
        return saved ? JSON.parse(saved) : []
    })

    useEffect(() => {
        localStorage.setItem("projects", JSON.stringify(projects))
    }, [projects])


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