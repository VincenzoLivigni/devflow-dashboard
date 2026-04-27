import { useState } from "react"
import SnippetForm from "../components/snippets/SnippetForm"
import SnippetList from "../components/snippets/SnippetList"

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
            <SnippetForm
                title={title}
                setTitle={setTitle}
                code={code}
                setCode={setCode}
                handleSubmit={handleSubmit}
            />

            <div className="separator2"></div>

            <SnippetList
                snippets={snippets}
            />
        </>
    )
}