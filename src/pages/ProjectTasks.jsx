import { useContext, useState } from "react";
import { TasksContext } from "../contexts/TasksContext";
import AddTask from "./AddTask";
import TaskList from "../components/tasks/TaskList"
import TaskFilters from "../components/tasks/TaskFilters"
import { useParams } from "react-router-dom";


export default function ProjectTasks() {

    const { tasks, toggleCompleted, deleteTask } = useContext(TasksContext)

    const { id } = useParams()

    const projectId = Number(id)

    const projectTasks = tasks.filter((t) => t.projectId === projectId)

    // stati task
    const [search, setSearch] = useState("")
    const [statusFilter, setStatusFilter] = useState("all")
    const [priorityFilter, setPriorityFilter] = useState("all")

    // filtri task
    const filteredTasks = projectTasks.filter((t) => {
        const matchSearch =
            t.title.toLowerCase().includes(search.toLowerCase())

        const matchStatusFilter =
            statusFilter === "all" ||
            (statusFilter === "active" && !t.completed) ||
            (statusFilter === "completed" && t.completed)

        const matchPriorityFilter =
            priorityFilter === "all" ||
            t.priority === priorityFilter

        return matchSearch && matchStatusFilter && matchPriorityFilter
    })

    return (
        <>
            <h2 className="mt-3">Task manager</h2>

            <AddTask projectId={projectId} />

            <TaskFilters
                search={search}
                setSearch={setSearch}
                statusFilter={statusFilter}
                setStatusFilter={setStatusFilter}
                priorityFilter={priorityFilter}
                setPriorityFilter={setPriorityFilter}
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