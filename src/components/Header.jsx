import { useState, useEffect } from "react";

export default function Header() {

    const [theme, setTheme] = useState("light");

    useEffect(() => {
        document.documentElement.setAttribute("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === "dark" ? "light" : "dark"));
    };

    return (
        <>
            <header>
                <div>
                    <input
                        type="text"
                        placeholder="Cerca..."
                    />
                    <button className="search fw-medium">Cerca</button>
                </div>

                <div className="d-flex align-items-center">
                    <span className="fw-medium">
                        {theme === "dark" ? "Tema chiaro" : "Tema scuro"}
                    </span>

                    <button className="tema" onClick={toggleTheme}>
                        <i className={`bi ${theme === "dark" ? "bi-toggle2-on" : "bi-toggle2-off"}`}></i>
                    </button>
                </div>
            </header>
        </>
    )
}