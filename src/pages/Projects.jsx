import { useContext } from "react"
import ProjectList from "../components/projects/ProjectList"
import { ProjectsContext } from "../contexts/ProjectsContext"
import { TasksContext } from "../contexts/TasksContext"

export default function Projects() {

    const { projects } = useContext(ProjectsContext)
    const { tasks } = useContext(TasksContext)
    return (
        <>
            <h2 className="mt-3">Projects</h2>

            <ProjectList
                projects={projects}
                tasks={tasks}
            />
        </>
    )
}