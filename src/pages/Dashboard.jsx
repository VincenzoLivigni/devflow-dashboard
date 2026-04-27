import { useEffect, useState } from "react";

export default function Dashboard() {

    const [tasks, setTasks] = useState([])
    const [snippets, setSnippets] = useState([])

    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem("tasks")) || []
        const savedSnippets = JSON.parse(localStorage.getItem("snippets")) || []

        setTasks(savedTasks)
        setSnippets(savedSnippets)
    }, [])

    const completedTasks = tasks.filter((t) => t.completed).length

    return (
        <>
            <h2 className="mt-3">Dashboard</h2>

            <div className="dashboard-cards">
                <div className="card">
                    <h4>Tasks</h4>
                    <h5 className="mt-2">{tasks.length}</h5>
                </div>

                <div className="card">
                    <h4>Completed</h4>
                    <h5 className="mt-2">{completedTasks}</h5>
                </div>

                <div className="card">
                    <h4>Snippets</h4>
                    <h5 className="mt-2">{snippets.length}</h5>
                </div>
            </div>
        </>
    )
}