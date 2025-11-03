import Navbar from "../components/Navbar.tsx";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Navbar/>
            <main className="container mx-auto">
                <Outlet/>
            </main>
        </>
    )
}

export default Layout
