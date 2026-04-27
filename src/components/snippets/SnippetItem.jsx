export default function SnippetItem({ snippet }) {

    return (
        <div className="snippet-card">
            <h4>{snippet.title}</h4>
            <pre>{snippet.code}</pre>
        </div>
    )
}