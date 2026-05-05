import { useContext, useMemo } from "react";
import { ProjectsContext } from "../contexts/ProjectsContext";
import { TasksContext } from "../contexts/TasksContext";
import { SnippetsContext } from "../contexts/SnippetsContext";

export default function Dashboard() {

    const { projects } = useContext(ProjectsContext)
    const { tasks } = useContext(TasksContext)
    const { snippets } = useContext(SnippetsContext)

    const completedTasks = useMemo(() => {
        return tasks.filter((t) => t.completed).length
    }, [tasks])

    // caratteristiche secondarie
    const completionRate = tasks.length ? Math.round((completedTasks / tasks.length) * 100) : 0;

    const recentTasks = tasks.slice(-5).reverse()

    const recentSnippets = snippets.slice(-5).reverse()

    return (
        <>
            <h2 className="mt-3">Dashboard</h2>

            <div className="dashboard-cards">
                <div className="card">
                    <h4>Projects</h4>
                    <h5 className="mt-2">{projects.length}</h5>
                </div>

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

            <div className="divider2"></div>

            <section className="secondary-features">
                <div className="progress-wrapper">
                    <div className="circular-progress"
                        style={{ background: `conic-gradient(var(--text) ${completionRate * 3.6}deg, var(--toggle-text) 0deg)` }}>
                        <span className="percent">{completionRate}%</span>
                    </div>

                    <h5 className="mt-2">Progress bar</h5>
                </div>

                <div className="card">
                    <h5>Recent tasks</h5>
                    <ul>
                        {
                            recentTasks.length === 0 ? (
                                <div className="empty-state">
                                    <h6>No Tasks yet</h6>
                                </div>
                            ) :
                                recentTasks.map(t => <li key={t.id}>{t.title}</li>)
                        }
                    </ul>
                </div>

                <div className="card">
                    <h5>Recent snippets</h5>
                    <ul>
                        {
                            recentSnippets.length === 0 ? (
                                <div className="empty-state">
                                    <h6>No Snippets yet</h6>
                                </div>
                            ) :
                                recentSnippets.map(s => <li key={s.id}>{s.title}</li>)
                        }
                    </ul>
                </div>
            </section>
        </>
    )
}