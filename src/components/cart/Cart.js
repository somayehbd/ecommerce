import style from './Cart.module.css'
import { FaShoppingCart } from 'react-icons/fa';

const Cart = () => {
    const handleClick = () => {
        alert('this is shoppingcart')
    }
    
    return (
        <div className={`${style.cart}`} onClick={handleClick}>
            <FaShoppingCart />
        </div>
    )
}
export default Cart;