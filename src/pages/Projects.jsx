import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
import ProjectList from "../components/projects/ProjectList"

export default function Projects() {

    const { projects, tasks } = useContext(GlobalContext)

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