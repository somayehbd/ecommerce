import { Link } from "react-router-dom";
import style from "./ManagementProduct.module.css"
import { useEffect, useState } from "react";


function ManagementProduct() {

  let products = JSON.parse(localStorage.getItem('managementproducts'));
  if (products == null) {
    products = [];
  }
  
  //function for search
  const [filteredProducts, setfilteredProducts] = useState(products);
  const searchchange = (e) => {
    const filteredProducts = products.filter(item => {
      return item.name.toLowerCase().includes(e.target.value.toLowerCase())
    })
    setfilteredProducts(filteredProducts);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <input className={`form-control mr-sm-2 ${style.search}`} type="search" placeholder="Search" aria-label="Search" onChange={searchchange} />
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
            <th>photo</th>

          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((item, id) => {
            return (

              <tr key={id}>

                <td>
                  <label className={style.checkboxLabel}>
                    <input type="checkbox" />
                  </label>
                  {item.name}
                </td>
                <td>{item.price}</td>
                <td>{item.description}</td>
                <td>{item.photo}</td>
              </tr>
            )
          })
          }

        </tbody>
      </table>
    </div>
  )
}
export default ManagementProduct;