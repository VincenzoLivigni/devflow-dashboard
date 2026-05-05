import { useMemo } from "react";

function debounce(callback, delay) {
    let timer;

    return (value) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            callback(value)
        }, delay)
    }
}

export default function TaskFilters({ setSearch, statusFilter, setStatusFilter, priorityFilter, setPriorityFilter }) {

    const debounceSetSearch = useMemo(() =>
        debounce(setSearch, 400)
        , [setSearch])

    return (
        <>
            <div className="divider2"></div>
            <h4>Filter Tasks</h4>
            <section className="task-filters">
                <div>
                    <span className="d-flex fw-medium">Search tasks</span>
                    <input
                        className="input"
                        type="text"
                        placeholder="Search..."
                        onChange={(e) => debounceSetSearch(e.target.value)}
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

            <div className="divider2"></div>
        </>
    )
}