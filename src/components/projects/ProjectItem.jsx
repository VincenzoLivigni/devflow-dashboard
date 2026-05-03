import { memo, useContext, useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { TasksContext } from "../../contexts/TasksContext"
import { ProjectsContext } from "../../contexts/ProjectsContext"
import useOverlay from "../../hooks/useOverlay"
import Overlay from "../Overlay"

function ProjectItem({ project }) {

    const { modifyProject, deleteProject } = useContext(ProjectsContext)
    const { tasks } = useContext(TasksContext)

    const { isOpen, open, close } = useOverlay()
    const [modifyTitle, setModifyTitle] = useState(project.title)
    const [modifyDescription, setModifyDescription] = useState(project.description)

    const projectTasks = useMemo(() => {
        return tasks.filter(t => t.projectId === project.id)
    }, [tasks])

    const completedTasks = useMemo(() => {
        return projectTasks.filter(t => t.completed).length
    }, [projectTasks])

    // funzione modifica project
    function handleSave() {
        if (!modifyTitle.trim() || !modifyDescription.trim()) return

        modifyProject(project.id, modifyTitle, modifyDescription)
        close()
    }

    return (
        <>
            <div className="project-container">
                <div className="d-flex justify-content-between">
                    <Link to={`/projects/${project.id}`}>
                        <h4>{project.title}</h4>
                    </Link>

                    <div>
                        <button className="btn primary me-2" onClick={open}>Edit</button>
                        <button className="btn primary" onClick={() => deleteProject(project.id)}>Delete</button>
                    </div>
                </div>


                <p className="description">{project.description}</p>

                <div className="project-stats">
                    <div className="project-card">
                        <h4>Tasks</h4>
                        <h5 className="mt-2">{projectTasks.length}</h5>
                    </div>

                    <div className="project-card">
                        <h4>Completed</h4>
                        <h5 className="mt-2">{completedTasks}</h5>
                    </div>
                </div>
            </div>

            {
                isOpen && (
                    <Overlay
                        title="Edit project"
                        close={close}
                        save={handleSave}>

                        <label className="fw-medium mt-3 mb-1">Edit title</label>
                        <input
                            className="input-project w-100"
                            value={modifyTitle}
                            onChange={(e) => setModifyTitle(e.target.value)} />

                        <label className="fw-medium mt-3 mb-1">Edit description</label>
                        <textarea
                            className="textarea-project w-100"
                            value={modifyDescription}
                            onChange={(e) => setModifyDescription(e.target.value)} />
                    </Overlay>
                )
            }
        </>
    )
}

export default memo(ProjectItem)