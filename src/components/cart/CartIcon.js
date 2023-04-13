import style from './CartIcon.module.css'
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from "react-redux"

const Cart = () => {

    const counteWithAction = useSelector((state) => state.cartIconSliceWithAction.value);

    return (
        <div className={`${style.cart}`} >
            <FaShoppingCart />
            <span>{counteWithAction}</span>
        </div>
    
    )
}
export default Cart;