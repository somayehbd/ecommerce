import style from './CartIcon.module.css'
import { useSelector } from "react-redux"
import { FaShoppingCart } from 'react-icons/fa';

const Cart = () => {

    const value = useSelector((state) => state.counterReducer.value);

    const handleClick = () => {

        
    }

    return (
        <div className={`${style.cart}`} onClick={handleClick}>
            {value}
            <FaShoppingCart />
        </div>
    
    )
}
export default Cart;