import ProjectItem from "./ProjectItem";

export default function ProjectList({ projects, tasks }) {

    return (
        <section>
            {
                projects.length === 0 ? (
                    <div className="empty-state">
                        <h3>No Projects yet</h3>
                    </div>
                ) :
                    projects.map((p) => (
                        <ProjectItem
                            key={p.id}
                            project={p}
                            tasks={tasks}
                        />
                    ))
            }
        </section>
    )
}