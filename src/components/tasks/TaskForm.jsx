export default function TaskForm({ newTask, setNewTask, addTask }) {

    return (
        <>
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

            <div className="separator2"></div>
        </>
    )
}