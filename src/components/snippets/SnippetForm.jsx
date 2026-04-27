export default function SnippetForm({ title, setTitle, code, setCode, handleSubmit }) {

    return (
        <>
            <h2 className="mt-3">Snippets</h2>
            <form onSubmit={handleSubmit} className="form-snippet">
                <label className="fw-medium mt-3 mb-1">Add title</label>
                <input
                    className="input-snippet mb-3"
                    type="text"
                    placeholder="add title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label className="fw-medium mb-1">Add code</label>
                <textarea
                    className="textarea-snippet mb-4"
                    placeholder="Paste your code here..."
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                />

                <div>
                    <button type="submit" className="btn primary px-2">Add</button>
                </div>
            </form>
        </>
    )
}