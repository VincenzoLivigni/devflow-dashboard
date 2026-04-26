import { useEffect, useState } from "react"
import TaskItem from "../components/tasks/TaskItem"
import TaskList from "../components/tasks/TaskList"
import TaskFilters from "../components/tasks/TaskFilters"
import TaskForm from "../components/tasks/TaskForm"


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

    // localStorage
    const [tasks, setTasks] = useState(() => {
        const saved = localStorage.getItem("tasks")
        return saved ? JSON.parse(saved) : initialTasks
    })

    useEffect(() => {
        // aggiorno lo storage ad ogni cambiamento del valore
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks])


    // stati
    const [search, setSearch] = useState("")
    const [statusFilter, setStatusFilter] = useState("all")
    const [priorityFilter, setPriorityFilter] = useState("all")

    const [newTask, setNewTask] = useState("")

    // filtri
    const filteredTasks = tasks.filter((t) => {
        const matchSearch =
            t.title.toLowerCase().includes(search.toLowerCase())

        const matchStatusFilter =
            statusFilter === "all" ||
            (statusFilter === "active" && !t.completed) ||
            (statusFilter === "completed" && t.completed)

        const matchPriorityFilter =
            priorityFilter === "all" ||
            t.priority.includes(priorityFilter)

        return matchSearch && matchStatusFilter && matchPriorityFilter
    })

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
            <h2 className="mt-3">Task manager</h2>

            <TaskFilters
                search={search}
                setSearch={setSearch}
                statusFilter={statusFilter}
                setStatusFilter={setStatusFilter}
                priorityFilter={priorityFilter}
                setPriorityFilter={setPriorityFilter}
            />

            <TaskForm
                newTask={newTask}
                setNewTask={setNewTask}
                addTask={addTask}
            />

            <section className="tasks-list">
                <TaskList
                    filteredTasks={filteredTasks}
                    toggleCompleted={toggleCompleted}
                    deleteTask={deleteTask}
                />
            </section>
        </>
    )
}