
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux"
import { addToShoppingCart } from '../../Redux/shoppingCartSlice'
import style from './HomeProduct.module.css'

function HomeProduct() {

    const [product, setproduct] = useState([]);
    const dispatch = useDispatch();
    // have different dispatch 
    const handleClick = (id, name, price, image) => {
        dispatch(addToShoppingCart({ id: id, name: name, price: price, image: image }))
    }

    useEffect(() => {
        fetch('http://localhost:3100/product')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setproduct(data)
            })
            .catch(error => {
                console.log("error: ", error)
            })
    }, [])

    return (
        <>
            {
                product.map(item => {
                    return (
                        <div className="col-3" key={item.id}>
                            <Link to={`/detail/${item.seoName}`}>
                                <img src={item.image} className={style.image} />
                            </Link>
                            <div className={style.productdetail}>
                                <Link to="/detail">
                                    <p>{item.name}</p>
                                </Link>
                                <p>{"$" + item.price}</p>
                                <p>{item.description.substring(0, 40)}...</p>
                                <a href="#" className={`btn btn-primary ${style.button}`} onClick={() => handleClick(item.id, item.name, item.price, item.image)}>ADD TO CART</a>

                            </div>
                        </div>
                    )

                })

            }

        </>
    )
}
export default HomeProduct