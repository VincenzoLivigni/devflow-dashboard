import TaskItem from "./TaskItem";

export default function TaskList({ tasks, toggleCompleted, deleteTask }) {

    return (
        <ul>
            {
                tasks.map((t) => (
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