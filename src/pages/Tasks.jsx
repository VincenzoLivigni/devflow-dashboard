import { useState } from "react"
import TaskItem from "../components/Tasks/TaskItem"
import TaskList from "../components/tasks/TaskList"
import TaskFilters from "../components/tasks/TaskFilters"

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

            <TaskFilters
                newTask={newTask}
                setNewTask={setNewTask}
                addTask={addTask}
                filter={filter}
                setFilter={setFilter}
            />

            <section className="tasks-list">
                <TaskList
                    tasks={filteredTasks}
                    toggleCompleted={toggleCompleted}
                    deleteTask={deleteTask} />
            </section>
        </>
    )
}