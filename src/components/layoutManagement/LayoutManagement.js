import { Outlet } from "react-router-dom";
import style from "./Management.module.css"

function LayoutManagement(){
    return(
        <>
         <div className={style.management}>Management</div>
            <Outlet />
        </>
)
}
export default LayoutManagement;