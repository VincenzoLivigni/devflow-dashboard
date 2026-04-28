import { useContext, useState } from "react"
import { GlobalContext } from "../../contexts/GlobalContext"

export default function SnippetItem({ snippet, deleteSnippet }) {

    const { modifySnippet } = useContext(GlobalContext)

    // stati modifica snippet
    const [isOpen, setIsOpen] = useState(false)
    const [modifyTitle, setModifyTitle] = useState(snippet.title)
    const [modifyCode, setModifyCode] = useState(snippet.code)

    // funzione modifica snippet
    function handleSave() {
        if (!modifyTitle.trim() || !modifyCode.trim()) return

        modifySnippet(snippet.id, modifyTitle, modifyCode)
        setIsOpen(false)
    }


    return (
        <>
            <div className="snippet-card">
                <div className="snippet-card-top">
                    <div>
                        <h4>{snippet.title}</h4>
                    </div>

                    <div>
                        <button className="btn primary me-2" onClick={() => setIsOpen(true)}>Edit</button>
                        <button className="btn primary" onClick={() => deleteSnippet(snippet.id)}>Delete</button>
                    </div>
                </div>

                <pre>{snippet.code}</pre>
            </div>

            {
                isOpen && (
                    <div className="overlay-snippet">
                        <div className="overlay-content">
                            <h3>Edit Snippet</h3>

                            <button className="close-overlay" onClick={() => setIsOpen(false)}>
                                <i className="bi bi-x fs-5"></i>
                            </button>

                            <label className="fw-medium mt-3 mb-1">Edit title</label>
                            <input
                                className="input-snippet w-100"
                                value={modifyTitle}
                                onChange={(e) => setModifyTitle(e.target.value)}
                            />

                            <label className="fw-medium mt-3 mb-1">Edit code</label>
                            <textarea
                                className="textarea-snippet w-100"
                                value={modifyCode}
                                onChange={(e) => setModifyCode(e.target.value)}
                            />

                            <div className="mt-3">
                                <button className="btn primary me-2" onClick={handleSave}>Save</button>
                                <button className="btn primary" onClick={() => setIsOpen(false)}>Cancel</button>
                            </div>
                        </div>
                    </div >
                )

            }
        </>
    )
}