import style from './Cart.module.css'
import { FaShoppingCart } from 'react-icons/fa';

function Cart() {
    return (
        <div className={`${style.cart}`}>
            <FaShoppingCart />
        </div>
    )
}
export default Cart;