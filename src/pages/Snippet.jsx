import { useEffect, useState } from "react"
import SnippetForm from "../components/snippets/SnippetForm"
import SnippetList from "../components/snippets/SnippetList"

export default function Snippet() {

    // localStorage snippet
    const [snippets, setSnippets] = useState(() => {
        const saved = localStorage.getItem("snippets")
        return saved ? JSON.parse(saved) : []
    })

    useEffect(() => {
        localStorage.setItem("snippets", JSON.stringify(snippets))
    }, [snippets])

    // stati
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

    // funzione rimuovi snippet
    function deleteSnippet(id) {
        setSnippets(prev => prev.filter((s) => s.id !== id))
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
                deleteSnippet={deleteSnippet}
            />
        </>
    )
}