import { useState } from "react"

export default function Snippet() {

    const [snippets, setSnippets] = useState([])

    const [title, setTitle] = useState("")
    const [code, setCode] = useState("")

    function handleSubmit(e) {
        e.preventDefault()

        if (!title.trim() || !code.trim()) return;

        const newSnippet = {
            id: Date.now(),
            title: title.trim(),
            code: code.trim()
        };

        setSnippets(prev => [...prev, newSnippet])
        setTitle("")
        setCode("")
    }

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

            <div className="separator2"></div>

            <section>
                <h2 className="mb-3">Code Snippets</h2>
                {
                    snippets.length === 0 ? (
                        <div className="empty-state">
                            <h3>No Snippets yet</h3>
                        </div>
                    ) :
                        snippets.map((s) => (
                            <div key={s.id} className="snippet-card">
                                <h4 className="mb-">{s.title}</h4>
                                <pre>{s.code}</pre>
                            </div>
                        ))
                }
            </section>
        </>
    )
}