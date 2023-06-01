import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./ManagementProduct.module.css";

function ManagementProduct() {
  const [orginalProducts, setOriginalProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  
  //function for search
  const handleSearch = (e) => {
    const filteredProducts = orginalProducts.filter(item => {
      return item.name.toLowerCase().includes(e.target.value.toLowerCase())
    })
    setFilteredProducts(filteredProducts);
  }

  //state to store the list of selected products
  const handleProductSelection = (productId) => {
    
    if (selectedProducts.includes(productId)) {
      setSelectedProducts(selectedProducts.filter(id => id != productId))
    }
    else {
      setSelectedProducts([...selectedProducts, productId])
    }
  }
  
  //function for deleteProduct
  const handleDeleteProduct = () => {
    let products = JSON.parse(localStorage.getItem('managementproducts'));
    products = orginalProducts.filter(item => !selectedProducts.includes(item.id));    
    localStorage.setItem('managementproducts', JSON.stringify(products));
    setOriginalProducts(products)
    setFilteredProducts(products)
  }

  useEffect(() => {
    let tempProducts = JSON.parse(localStorage.getItem('managementproducts'))
    setOriginalProducts(tempProducts);
    setFilteredProducts(tempProducts);
  }, [])

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <input className={`form-control mr-sm-2 ${style.search}`} type="search" placeholder="Search" aria-label="Search" onChange={handleSearch} />
        </div>
        <div className="col-4">
          <button type="button" className={`btn btn-outline-danger ${style.delete}`} onClick={handleDeleteProduct}>Delete</button>
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