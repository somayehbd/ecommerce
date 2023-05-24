import { Link, Outlet } from "react-router-dom";
import style from "./ManagementProduct.module.css"
import { useEffect, useState } from "react";

function ManagementProduct() {

    let data = JSON.parse(localStorage.getItem('products'));
    if (data == null) {
        data = [];
    }

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
            {
                data.map((item) => {
                    return (
                        <div className="row">
                            <div className="col-3">{item.name}</div>
                            <div className="col-3">{item.price}</div>
                            <div className="col-3">{item.description}</div>
                            <div className="col-3">{item.name}</div>
                        </div>
                    )
                })
            }

        </div>
    )
}
export default ManagementProduct;