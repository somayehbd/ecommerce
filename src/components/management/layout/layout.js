import {Outlet } from "react-router-dom";
import style from "./layout.module.css"

function Layout() {
    return (
        <>
            <div className={style.management}>Management</div>
            <Outlet />
        </>

    )
}
export default Layout;