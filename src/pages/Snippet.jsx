import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import SnippetList from "../components/snippets/SnippetList"

export default function Snippet() {

    const { snippets, deleteSnippet } = useContext(GlobalContext)

    return (
        <>
            <SnippetList
                snippets={snippets}
                deleteSnippet={deleteSnippet}
            />
        </>
    )
}