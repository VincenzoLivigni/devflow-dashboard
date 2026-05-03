import { memo, useContext, useState } from "react"
import { SnippetsContext } from "../../contexts/SnippetsContext"
import useOverlay from "../../hooks/useOverlay"
import Overlay from "../Overlay"

function SnippetItem({ snippet, deleteSnippet }) {

    const { modifySnippet } = useContext(SnippetsContext)

    // stati modifica snippet
    const { isOpen, open, close } = useOverlay()
    const [modifyTitle, setModifyTitle] = useState(snippet.title)
    const [modifyCode, setModifyCode] = useState(snippet.code)

    // funzione modifica snippet
    function handleSave() {
        if (!modifyTitle.trim() || !modifyCode.trim()) return

        modifySnippet(snippet.id, modifyTitle, modifyCode)
        close()
    }


    return (
        <>
            <div className="snippet-card">
                <div className="snippet-card-top">
                    <div>
                        <h4>{snippet.title}</h4>
                    </div>

                    <div>
                        <button className="btn primary me-2" onClick={open}>Edit</button>
                        <button className="btn primary" onClick={() => deleteSnippet(snippet.id)}>Delete</button>
                    </div>
                </div>

                <pre>{snippet.code}</pre>
            </div>

            {
                isOpen && (
                    <Overlay
                        title="Edit snippet"
                        close={close}
                        save={handleSave}>

                        <input
                            className="input-snippet w-100"
                            value={modifyTitle}
                            onChange={(e) => setModifyTitle(e.target.value)} />

                        <label className="fw-medium mt-3 mb-1">Edit code</label>
                        <textarea
                            className="textarea-snippet w-100"
                            value={modifyCode}
                            onChange={(e) => setModifyCode(e.target.value)} />
                    </Overlay>
                )

            }
        </>
    )
}

export default memo(SnippetItem)