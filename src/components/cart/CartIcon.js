import style from './CartIcon.module.css'
import { FaShoppingCart } from 'react-icons/fa';

const Cart = () => {
    const handleClick = () => {

        
    }

    return (
        <div className={`${style.cart}`} onClick={handleClick}>
            <FaShoppingCart />
        </div>
    
    )
}
export default Cart;