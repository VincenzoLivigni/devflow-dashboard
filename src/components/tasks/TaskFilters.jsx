export default function TaskFilters({ search, setSearch, statusFilter, setStatusFilter, priorityFilter, setPriorityFilter }) {

    return (
        <>
            <div className="separator2"></div>
            <h4>Filter Tasks</h4>
            <section className="top">
                <div>
                    <span className="d-flex fw-medium">Search tasks</span>
                    <input
                        className="input"
                        type="text"
                        placeholder="Search..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <div>
                    <span className="d-flex fw-medium">Filter status</span>
                    <select
                        className="select"
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}>

                        <option value="all">All</option>
                        <option value="active">Active</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>

                <div>
                    <span className="d-flex fw-medium">Filter priority</span>
                    <select
                        className="select"
                        value={priorityFilter}
                        onChange={(e) => setPriorityFilter(e.target.value)}>

                        <option value="all">All</option>
                        <option value="low">🟢 low</option>
                        <option value="medium">🟡 medium</option>
                        <option value="high">🔴 high</option>
                    </select>
                </div>
            </section>

            <div className="separator2"></div>
        </>
    )
}