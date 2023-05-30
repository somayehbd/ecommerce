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


  //state to store the list of selected products
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleProductSelection = (productId) => {

    if (selectedProducts.includes(productId)) {
      setSelectedProducts(selectedProducts.filter(id => id != productId))
    }
    else {
      setSelectedProducts([...selectedProducts, productId])
    }
  }

  useEffect(() => {
    console.log(selectedProducts)
  }, [selectedProducts]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <input className={`form-control mr-sm-2 ${style.search}`} type="search" placeholder="Search" aria-label="Search" onChange={searchchange} />
        </div>
        <div className="col-4">
          <button type="button" className={`btn btn-outline-danger ${style.delete}`} >Delete</button>
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
                    <input type="checkbox" checked={selectedProducts.includes(item.id)} onChange={() => handleProductSelection(item.id)} />
                  </label>
                  {item.name}
                </td>
                <td>{item.price}</td>
                <td>{item.description}</td>
                <td className={style.image}><img src={item.productPicture} /></td>
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