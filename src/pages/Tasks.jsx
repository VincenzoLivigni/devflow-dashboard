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

    return (
        <>
            <h1>Task manager</h1>

            <span>Add new task</span>
            <input
                type="text"
                placeholder="add new task"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <button onClick={addTask}>Add</button>

            <ul>
                {
                    tasks.map((t) => (
                        <li key={t.id} onClick={() => toggleCompleted(t.id)}>
                            <span className="me-2">{t.completed ? "✅" : "❌"}</span>
                            <strong className="me-2">{t.title}</strong>
                            <small>{t.priority}</small>

                            <button onClick={() => deleteTask(t.id)}>Delete</button>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}