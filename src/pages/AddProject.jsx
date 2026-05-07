import { useContext, useState } from "react"
import { ProjectsContext } from "../contexts/ProjectsContext"

export default function AddProject() {

    const { addProject } = useContext(ProjectsContext)

    const [projectTitle, setProjectTitle] = useState("")
    const [projectDescription, setProjectDescription] = useState("")

    function handleSubmit(e) {
        e.preventDefault()

        if (!projectTitle.trim() || !projectDescription.trim()) return

        addProject(projectTitle, projectDescription)

        setProjectTitle("")
        setProjectDescription("")
    }

    return (
        <>
            <h2 className="mt-3">Add project</h2>

            <form className="form-project" onSubmit={handleSubmit}>

                <label className="fw-medium mt-3 mb-1">Add title</label>
                <input
                    className="input-project mb-3"
                    type="text"
                    placeholder="add title"
                    value={projectTitle}
                    onChange={(e) => setProjectTitle(e.target.value)}
                />

                <label className="fw-medium mb-1">Add description</label>
                <textarea
                    className="textarea-snippet mb-4"
                    placeholder="add project description..."
                    value={projectDescription}
                    onChange={(e) => setProjectDescription(e.target.value)}
                />

                <div>
                    <button type="submit" className="btn primary">Add</button>
                </div>
            </form>
        </>
    )
}