export default function SnippetItem({ snippet, deleteSnippet }) {

    return (
        <>
            <div className="snippet-card">
                <div className="snippet-card-top">
                    <div>
                        <h4>{snippet.title}</h4>
                    </div>

                    <div>
                        <button className="btn primary" onClick={() => deleteSnippet(snippet.id)}>Delete</button>
                    </div>
                </div>

                <pre>{snippet.code}</pre>
            </div>
        </>
    )
}