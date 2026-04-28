import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
import { Link } from "react-router-dom"

export default function Projects() {

    const { projects, tasks } = useContext(GlobalContext)

    return (
        <>
            <h2 className="mt-3">Projects</h2>

            {
                projects.length === 0 ? (
                    <div className="empty-state">
                        <h3>No Projects yet</h3>
                    </div>
                ) :
                    projects.map((p) => {

                        const projectTasks = tasks.filter(t => t.projectId === p.id)
                        const completedTasks = projectTasks.filter(t => t.completed).length

                        return (
                            <div className="project-container" key={p.id}>
                                <Link to={`/projects/${p.id}`}>
                                    <h4>{p.title}</h4>
                                </Link>

                                <p className="description">{p.description}</p>

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
                            </div >
                        )
                    })
            }
        </>
    )
}