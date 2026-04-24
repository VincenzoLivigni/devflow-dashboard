import { useState } from "react"

export default function Tasks() {

    const initialTasks = [
        {
            id: 1,
            title: "Fix navbar bug",
            completed: false,
            priority: "🟢 low"
        },
        {
            id: 2,
            title: "Fix sidebar UI",
            completed: false,
            priority: "🟢 low"
        },
        {
            id: 3,
            title: "Setup routing",
            completed: false,
            priority: "🟡 medium"
        },
        {
            id: 4,
            title: "Implement dark mode",
            completed: false,
            priority: "🔴 high"
        }
    ]

    const [tasks, setTasks] = useState(initialTasks)
    const [newTask, setNewTask] = useState("")

    const [filter, setFilter] = useState("all")

    // funzione aggiungi task
    function addTask() {
        if (!newTask.trim()) return

        const task = {
            id: Date.now(),
            title: newTask,
            completed: false,
            priority: "🟢 low"
        }

        setTasks(prev => [...prev, task])
        setNewTask("")
    }


    // funzione toggle completamento task
    function toggleCompleted(id) {
        setTasks(prev => prev.map((t) => t.id === id
            ? { ...t, completed: !t.completed } : t
        )
        )
    }

    // funzione rimuovi task
    function deleteTask(id) {
        setTasks(prev => prev.filter((t) => t.id !== id))
    }

    // funzione lista filtrata 
    const filteredTasks = tasks.filter((t) => {
        if (filter === "active") return !t.completed
        if (filter === "completed") return t.completed
        return true
    })

    return (
        <>
            <h1>Task manager</h1>

            <section className="top">
                <div>
                    <span className="d-flex fw-medium">Add new task</span>
                    <div className="d-flex">
                        <input
                            className="input me-1"
                            type="text"
                            placeholder="add new task"
                            value={newTask}
                            onChange={(e) => setNewTask(e.target.value)}
                        />
                        <button className="btn primary" onClick={addTask}>Add</button>
                    </div>
                </div>

                <div>
                    <span className="d-flex fw-medium">Filter tasks</span>
                    <select
                        className="select"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}>

                        <option value="all">All</option>
                        <option value="active">Active</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>
            </section>

            <section className="tasks-list">
                <ul>
                    {
                        filteredTasks.map((t) => (
                            <li key={t.id} className="task-item">
                                <div className="task-left" onClick={() => toggleCompleted(t.id)}>
                                    <span className="me-2">{t.completed ? "✅" : "❌"}</span>
                                    <strong className="me-2">{t.title}</strong>
                                </div>

                                <div className="task-right">
                                    <small className="me-3">{t.priority}</small>
                                    <button className="btn secondary" onClick={() => deleteTask(t.id)}>Delete</button>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </section>
        </>
    )
}