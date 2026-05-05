import { memo, useContext, useState } from "react";
import { TasksContext } from "../../contexts/TasksContext";
import useOverlay from "../../hooks/useOverlay";
import Overlay from "../Overlay";

function TaskItem({ task, toggleCompleted, deleteTask }) {

    const { modifyTask } = useContext(TasksContext)

    const { isOpen, open, close } = useOverlay()
    const [modifyTitle, setModifyTitle] = useState(task.title)
    const [priority, setPriority] = useState(task.priority)

    function handleSave() {
        if (!modifyTitle.trim()) return

        modifyTask(task.id, modifyTitle, priority)
        close()
    }

    const choosePriority = {
        low: "🟢 low",
        medium: "🟡 medium",
        high: "🔴 high"
    };

    return (
        <>
            <li className="task-item">
                <div className="task-item-left" onClick={() => toggleCompleted(task.id)}>
                    <span className="me-2">{task.completed ? "✅" : "❌"}</span>
                    <strong className="me-2">{task.title}</strong>
                </div>

                <div className="task-item-right">
                    <small className="me-3">{choosePriority[task.priority]}</small>
                    <button className=" btn secondary me-2" onClick={open}>Edit</button>
                    <button className="btn secondary" onClick={() => deleteTask(task.id)}>Delete</button>
                </div>
            </li>

            {
                isOpen && (
                    <Overlay
                        title="Edit task"
                        close={close}
                        save={handleSave}>

                        <label className="fw-medium mt-3 mb-1">Title</label>
                        <input
                            value={modifyTitle}
                            onChange={(e) => setModifyTitle(e.target.value)} />

                        <label className="fw-medium mt-3 mb-1">Priority</label>
                        <select
                            value={priority}
                            onChange={(e) => setPriority(e.target.value)}>
                            <option value="low">🟢 low</option>
                            <option value="medium">🟡 medium</option>
                            <option value="high">🔴 high</option>
                        </select>
                    </Overlay>
                )
            }
        </>
    )
}

export default memo(TaskItem)