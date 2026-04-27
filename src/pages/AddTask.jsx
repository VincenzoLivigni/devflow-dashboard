import { useContext, useState } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

export default function AddTask() {

    const { addTask } = useContext(GlobalContext)

    const [taskTitle, setTaskTitle] = useState("")
    const [priority, setPriority] = useState("low")

    function handleSubmit(e) {
        e.preventDefault()

        if (!taskTitle.trim()) return

        addTask(taskTitle, priority)

        setTaskTitle("")
        setPriority("low")
    }

    return (
        <>
            <form className="task-form" onSubmit={handleSubmit}>

                <div>
                    <label className="d-flex fw-medium">Title</label>
                    <input
                        className="input me-1"
                        type="text"
                        placeholder="add new task"
                        value={taskTitle}
                        onChange={(e) => setTaskTitle(e.target.value)}
                    />
                </div>

                <div>
                    <label className="d-flex fw-medium">Priority</label>
                    <select
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                    >
                        <option value="low">🟢 low</option>
                        <option value="medium">🟡 medium</option>
                        <option value="high">🔴 high</option>
                    </select>
                </div>

                <button className="btn primary" type="submit">Add</button>
            </form>
        </>
    )
}