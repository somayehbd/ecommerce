import style from './CartIcon.module.css'
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from "react-redux"
import ShoppingCart from '../shoppingcart/ShoppingCart';
import { useEffect, useState } from 'react';

const Cart = () => {
    const [isOpenCart, setisOpenCart] = useState(false);
    //listener to productContentSlice to count number of products
    const products = useSelector((state) => state.productContent.value);
    // cartIcon is subscriber to close cart
    const cartvisibility = useSelector(state => state.cartVisibility.value);

    //handleclick to show and hidden shoppingCart
    const handleCloseCart = () => {
        setisOpenCart(!isOpenCart)
    }
    //useEffect for cartIcon subscriber
    useEffect(() => {
        if (cartvisibility == 0)
            return;

        setisOpenCart(!isOpenCart)
    }, [cartvisibility])

    return (
        <>
            <div className={`${style.cart}`}>
                <FaShoppingCart onClick={handleCloseCart} />
                <span>{products.length}</span>
            </div>
            {isOpenCart ? <ShoppingCart /> : null}
        </>
    )
}
export default Cart;