import style from './Cart.module.css'
import { FaShoppingCart } from 'react-icons/fa';

const Cart = () => {
    return (
        <div className={`${style.cart}`}>
            <FaShoppingCart />
        </div>
    )
}
export default Cart;