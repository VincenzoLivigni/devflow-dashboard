export default function Overlay({ title, children, close, save }) {

    return (
        <div className="overlay">
            <div className="overlay-content">
                <h3>{title}</h3>

                <button className="close-overlay" onClick={close}>
                    <i className="bi bi-x fs-5"></i>
                </button>

                {children}

                <div className="mt-3">
                    <button className="btn primary me-2" onClick={save}>Save</button>
                    <button className="btn primary" onClick={close}>Cancel</button>
                </div>
            </div>
        </div>
    )
}