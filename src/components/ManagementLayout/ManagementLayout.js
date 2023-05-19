import { Outlet } from "react-router-dom";
import style from "./ManagementLayout.module.css"

function LayoutManagement() {
    return (
        <>
            <div className={style.management}>Management</div>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <input className={`form-control mr-sm-2 ${style.search}`} type="search" placeholder="Search" aria-label="Search" />
                    </div>
                    <div className="col-4">
                        <button type="button" className={`btn btn-outline-danger ${style.delete}`}>Delete</button>
                    </div>
                    <div className="col-4">
                        <button type="button" className={`btn btn-outline-success ${style.success}`}>NewProduct</button>
                    </div>
                </div>
            </div>
            <Outlet />
        </>

    )
}
export default LayoutManagement;