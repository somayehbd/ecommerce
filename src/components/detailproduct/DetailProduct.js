import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import style from './detailProduct.module.css'
function DetailProduct() {

    const { seoName } = useParams();
    const [product, setproduct] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3100/product`)
            .then(res => {
                return res.json()
            })
            .then(data => {
                let selectedProduct = data.find(item => {
                    return item.seoName === seoName
                });
                console.log(selectedProduct)
                setproduct(selectedProduct)
            })
            .catch(error => { console.log("error: ", error) })
    }, [seoName])


    return (
        <div className={`className="col-12 ${style.productdetail}`}>
            <img src={product.image} />
            <p>{product.name}</p>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <a href="#" className={`btn btn-primary ${style.button}`}>ADD TO CART</a>
        </div>


    )
}
export default DetailProduct;