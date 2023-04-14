import HomeProduct from "../homeproduct/HomeProduct";
import style from './ShoppingCart.module.css'
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { IoClose } from 'react-icons/io5';
function ShoppingCart() {


    return (
        <div className={`container ${style.shoppingCartContainer}`}>
            <div className="row">
                <div className={`col-12 ${style.shopppingCartHeader}`}>
                    <p>text left side</p>
                    <div className={style.closeShoppingcart}> <IoClose /> </div>
                </div>
            </div>
            <div className="row">
                <div className={`col-4 ${style.shopppingCartRemove}`}>
                    <RiDeleteBin6Fill size={24} />
                </div>
                <div className={`col-6 ${style.shopppingCartContent}`} >
                    <p>product name</p>
                    <p> product price</p>
                    <p>display number of selected product</p>
                </div>

                <div className={`col-2 ${style.shopppingCartImg}`} >
                    <p>image</p>
                </div>
            </div>
            <div className="row">
                <div className={`col-12 ${style.shopppingCartTotal}`}>
                    <p> TotalPrice:</p>
                    <p>total price by number</p>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <a className="btn btn-primary">go user information page to pay</a>
                </div>
            </div>
        </div>
    )
}
export default ShoppingCart;