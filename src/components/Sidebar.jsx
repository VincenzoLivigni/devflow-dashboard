import { NavLink } from "react-router-dom"

export default function Sidebar() {

    return (
        <>
            <div className="sidebar">

                <div className="text-center">
                    <i id="logo" className="bi bi-explicit"></i>
                </div>

                <div className="separator"></div>

                <ul className="list-unstyled">
                    <li className="nav-item">
                        <NavLink className="nav-link" to={"/"}>
                            <i className="bi bi-grid"></i>
                            <span>Dashboard</span>
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to={"/projects"} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                            <i className="bi bi-list-task"></i>
                            <span>Projects</span>
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to={"/snippets"} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                            <i className="bi bi-code-slash"></i>
                            <span>Snippets</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}