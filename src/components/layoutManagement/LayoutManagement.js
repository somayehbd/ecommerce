import { Outlet } from "react-router-dom";
import style from "./LayoutManagement.module.css"

function LayoutManagement(){
    return(
        <>
         <div className={style.management}>Management</div>
         <form className="form-inline">
                <input className={`form-control mr-sm-2 ${style.search}`} type="search" placeholder="Search" aria-label="Search" />
            </form>
            <Outlet />
        </>
)
}
export default LayoutManagement;