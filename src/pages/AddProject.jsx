import { useContext, useState } from "react"
import { GlobalContext } from "../contexts/GlobalContext"

export default function AddProject() {

    const { addProject } = useContext(GlobalContext)

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
            <h3>Add Project</h3>

            <form className="task-form" onSubmit={handleSubmit}>

                <label className="fw-medium mt-3 mb-1">Add project</label>
                <input
                    className="input-snippet mb-3"
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