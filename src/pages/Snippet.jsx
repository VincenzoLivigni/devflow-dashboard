import { useContext } from "react";
import { SnippetsContext } from "../contexts/SnippetsContext";
import SnippetList from "../components/snippets/SnippetList"

export default function Snippet() {

    const { snippets, deleteSnippet } = useContext(SnippetsContext)

    return (
        <>
            <h2 className="mt-3">Code Snippets</h2>

            <SnippetList
                snippets={snippets}
                deleteSnippet={deleteSnippet}
            />
        </>
    )
}