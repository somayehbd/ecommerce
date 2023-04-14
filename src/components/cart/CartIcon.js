import style from './CartIcon.module.css'
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from "react-redux"
import ShoppingCart from '../shoppingcart/ShoppingCart';

const Cart = () => {

    const counteWithAction = useSelector((state) => state.cartIconSliceWithAction.value);


    return (
        <>
            <div className={`${style.cart}`} >
                <FaShoppingCart onClick={() => { alert('aa') }} />
                <span>{counteWithAction}</span>
            </div>
            <ShoppingCart />
        </>
    )
}
export default Cart;