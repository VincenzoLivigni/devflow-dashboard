import { useContext, useState } from "react";
import { TasksContext } from "../../contexts/TasksContext";

export default function TaskItem({ task, toggleCompleted, deleteTask }) {

    const { modifyTask } = useContext(TasksContext)

    const [isOpen, setIsOpen] = useState(false)
    const [modifyTitle, setModifyTitle] = useState(task.title)
    const [priority, setPriority] = useState(task.priority)

    function handleSave() {
        if (!modifyTitle.trim()) return

        modifyTask(task.id, modifyTitle, priority)
        setIsOpen(false)
    }

    const choosePriority = {
        low: "🟢 low",
        medium: "🟡 medium",
        high: "🔴 high"
    };

    return (
        <>
            <li className="task-item">
                <div className="task-left" onClick={() => toggleCompleted(task.id)}>
                    <span className="me-2">{task.completed ? "✅" : "❌"}</span>
                    <strong className="me-2">{task.title}</strong>
                </div>

                <div className="task-right">
                    <small className="me-3">{choosePriority[task.priority]}</small>
                    <button className=" btn secondary me-2" onClick={() => setIsOpen(true)}>Edit</button>
                    <button className="btn secondary" onClick={() => deleteTask(task.id)}>Delete</button>
                </div>
            </li>

            {
                isOpen && (
                    <div className="overlay-task">
                        <div className="overlay-content">
                            <h3>Edit Task</h3>

                            <button className="close-overlay" onClick={() => setIsOpen(false)}>
                                <i className="bi bi-x fs-5"></i>
                            </button>

                            <label className="fw-medium mt-3 mb-1">Title</label>
                            <input
                                value={modifyTitle}
                                onChange={(e) => setModifyTitle(e.target.value)}
                            />

                            <label className="fw-medium mt-3 mb-1">Priority</label>
                            <select
                                value={priority}
                                onChange={(e) => setPriority(e.target.value)}
                            >
                                <option value="low">🟢 low</option>
                                <option value="medium">🟡 medium</option>
                                <option value="high">🔴 high</option>
                            </select>

                            <div className="mt-3">
                                <button className="btn primary me-2" onClick={handleSave}>Save</button>
                                <button className="btn primary" onClick={() => setIsOpen(false)}>Cancel</button>
                            </div>
                        </div>
                    </div>

                )
            }
        </>
    )
}