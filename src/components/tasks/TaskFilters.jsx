export default function TaskFilters({ newTask, setNewTask, addTask, filter, setFilter }) {

    return (
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
    )
}