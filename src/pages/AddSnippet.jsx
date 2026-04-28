import { useContext, useState } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

export default function AddSnippet() {

    const { addSnippet } = useContext(GlobalContext)

    const [snippetTitle, setSnippetTitle] = useState("")
    const [code, setCode] = useState("")

    function handleSubmit(e) {
        e.preventDefault()

        if (!snippetTitle.trim() || !code.trim()) return

        addSnippet(snippetTitle, code)

        setSnippetTitle("")
        setCode("")
    }

    return (
        <>
            <h2 className="mt-3">Add new snippet</h2>

            <form onSubmit={handleSubmit} className="form-snippet">
                <label className="fw-medium mt-3 mb-1">Add title</label>
                <input
                    className="input-snippet mb-3"
                    type="text"
                    placeholder="add title"
                    value={snippetTitle}
                    onChange={(e) => setSnippetTitle(e.target.value)}
                />

                <label className="fw-medium mb-1">Add code</label>
                <textarea
                    className="textarea-snippet mb-4"
                    placeholder="Paste your code here..."
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                />

                <div>
                    <button type="submit" className="btn primary">Add</button>
                </div>
            </form>
        </>
    )
}