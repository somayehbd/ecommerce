import style from './CartIcon.module.css'
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from "react-redux"
import ShoppingCart from '../shoppingcart/ShoppingCart';
import { useState } from 'react';

const Cart = () => {

    const counteWithAction = useSelector((state) => state.cartIconSliceWithAction.value);
    //handleclick to show and hidden shoppingCart
    const [isOpenCart, setisOpenCart] = useState(false);
    const handleCloseCart = () => {
        setisOpenCart(!isOpenCart)
    }

    return (
        <>
            <div className={`${style.cart}`}>
                <FaShoppingCart onClick={handleCloseCart} />
                <span>{counteWithAction}</span>
            </div>
            {isOpenCart ? <ShoppingCart /> : null}
        </>
    )
}
export default Cart;