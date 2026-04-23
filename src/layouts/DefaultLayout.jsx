import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function DefaultLayout() {

    return (
        <>
            <div className="app-layout">
                <Sidebar />

                <div className="main-area">
                    <Header />
                    <main className="content">
                        <Outlet />
                    </main>
                </div>
            </div>
        </>
    )
}