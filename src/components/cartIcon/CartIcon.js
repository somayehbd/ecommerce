import style from './CartIcon.module.css'
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from "react-redux"
import ShoppingCart from '../shoppingcart/ShoppingCart';
import { useEffect, useState } from 'react';

const CartIcon = () => {
    const [isOpenCart, setisOpenCart] = useState(false);
    //listener to shoppingCartSlice to count number of products
    const shoppingCartItems = useSelector((state) => state.shoppingCartSlice.items);
    // cartIcon is subscriber to close cart
    const cartVisibility = useSelector(state => state.cartVisibilitySlice.value);

    //handleclick to show and hidden shoppingCart
    const handleCloseCart = () => {
        setisOpenCart(!isOpenCart)
    }
    //useEffect for cartIcon subscriber
    useEffect(() => {
        if (cartVisibility == 0)
            return;

        setisOpenCart(!isOpenCart)
    }, [cartVisibility])

    return (
        <>
            <div className={`${style.cart}`}>
                <FaShoppingCart onClick={handleCloseCart} />
                <span>{shoppingCartItems.length}</span>
            </div>
            {isOpenCart ? <ShoppingCart /> : null}
        </>
    )
}
export default CartIcon;