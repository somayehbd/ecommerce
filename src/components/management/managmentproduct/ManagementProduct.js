import { Link, Outlet } from "react-router-dom";
import style from "./ManagementProduct.module.css"
import { useEffect, useState } from "react";

function ManagementProduct() {

    let products = JSON.parse(localStorage.getItem('managementproducts'));
    if (products == null) {
        products = [];
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
            <table className={style.productTable}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.description}</td>
              <td>{item.category}</td>
            </tr>
          ))}
        </tbody>
        </table>
            {/* {
                products.map((item) => {
                    return (
                        <div className="row">
                            <div className="col-3">{item.name}</div>
                            <div className="col-3">{item.price}</div>
                            <div className="col-3">{item.description}</div>
                            <div className="col-3">{item.name}</div>
                        </div>
                    )
                })
            } */}

        </div>
    )
}
export default ManagementProduct;