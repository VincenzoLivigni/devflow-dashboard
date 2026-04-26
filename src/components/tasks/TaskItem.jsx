export default function TaskItem({ task, toggleCompleted, deleteTask }) {

    return (
        <li className="task-item">
            <div className="task-left" onClick={() => toggleCompleted(task.id)}>
                <span className="me-2">{task.completed ? "✅" : "❌"}</span>
                <strong className="me-2">{task.title}</strong>
            </div>

            <div className="task-right">
                <small className="me-3">{task.priority}</small>
                <button className="btn secondary" onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
        </li>
    )
}