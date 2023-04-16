import HomeProduct from "../homeproduct/HomeProduct";
import style from './ShoppingCart.module.css'
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { IoClose } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { cartVisibility } from '../../Redux/changeShoppingCartVisibilitySlice.js'
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function ShoppingCart() {

    const dispatch = useDispatch();
    //subscriber
    const productContent = useSelector(state => state.productContent.value);
    const [productContentArr, setproductContentArr] = useState([]);

    useEffect(() => {
        if (productContent == null || productContent == undefined || Object.keys(productContent).length === 0)
            return;

        const newArray = [...productContentArr, productContent]
        setproductContentArr(newArray)
    }, [productContent]);

    return (
        <>
            <div className={`container ${style.shoppingCartContainer}`}>
                <div className="row">
                    <div className={`col-12 ${style.shopppingCartHeader}`}>
                        <p>shopping Cart</p>
                        <div className={style.closeShoppingcart}>
                            <IoClose onClick={() => dispatch(cartVisibility())} />
                        </div>
                    </div>
                </div>

                <div className={`row ${style.contentContainer}`}>
                    <div className="col-12">
                        {
                            productContentArr.map((item, index) => {
                                return (
                                    <div key={index} className={style.flexContainer}>
                                        <div className={style.item1}>
                                            <button><RiDeleteBin6Fill size={24} /></button>
                                        </div>

                                        <div className={style.item2}>
                                            <p>{item.name}</p>
                                            <p>{item.price}</p>
                                        </div>
                                        <div className={style.item3}>
                                            <img src={item.image} />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className={`row ${style.calcContainer}`}>
                    <div className={`col-12 ${style.shopppingCartTotal}`}>
                        <p> TotalPrice:</p>
                        <p>355$</p>
                    </div>
                </div>
                <div className={`row ${style.btncontainer}`}>
                    <div className="col-12">
                        <a className="btn btn-primary">go user information page to pay</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ShoppingCart;