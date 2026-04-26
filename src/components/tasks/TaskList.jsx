import TaskItem from "./TaskItem";

export default function TaskList({ filteredTasks, toggleCompleted, deleteTask }) {

    return (
        <ul>
            {
                filteredTasks.length === 0 ? (
                    <li className="empty-state">
                        <h3>No tasks found</h3>
                    </li>
                ) :
                    filteredTasks.map((t) => (
                        <TaskItem
                            key={t.id}
                            task={t}
                            toggleCompleted={toggleCompleted}
                            deleteTask={deleteTask}
                        />
                    ))
            }
        </ul>
    )
}