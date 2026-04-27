import SnippetItem from "./SnippetItem";

export default function SnippetList({ snippets, deleteSnippet }) {

    return (

        <section>
            <h2>Code Snippets</h2>
            {
                snippets.length === 0 ? (
                    <div className="empty-state">
                        <h3>No Snippets yet</h3>
                    </div>
                ) :
                    snippets.map((s) => (
                        <SnippetItem
                            key={s.id}
                            snippet={s}
                            deleteSnippet={deleteSnippet}
                        />
                    ))
            }
        </section>
    )
}