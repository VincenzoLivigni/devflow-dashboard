import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

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
                <div className="d-flex">
                    <input
                        className="input me-1"
                        type="text"
                        placeholder="Cerca..."
                    />
                    <button className="btn secondary fw-medium">Cerca</button>
                </div>

                <div>
                    <NavLink to="/addProject" className="fw-medium me-4">Add project</NavLink>
                    <NavLink to="/addSnippet" className="fw-medium">Add snippet</NavLink>
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