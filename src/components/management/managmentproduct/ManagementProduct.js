import { Link, Outlet } from "react-router-dom";
import style from "./ManagementProduct.module.css"

function ManagementProduct() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <input className={`form-control mr-sm-2 ${style.search}`} type="search" placeholder="Search" aria-label="Search" />
                </div>
                <div className="col-4">
                    <button type="button" className={`btn btn-outline-danger ${style.delete}`}>Delete</button>
                </div>
                <div className="col-4">
                    <Link to={'/admin/addproduct'}>
                        <button type="button" className="btn btn-outline-success" >NewProduct</button>
                    </Link>

                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <p>apple</p>
                    <p>apple</p>
                    <p>apple</p>
                    <p>apple</p>
                    <p>apple</p>
                </div>
            </div>
        </div>
    )
}
export default ManagementProduct;