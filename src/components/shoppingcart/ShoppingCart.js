import HomeProduct from "../homeproduct/HomeProduct";
import style from './ShoppingCart.module.css'
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { IoClose } from 'react-icons/io5';
function ShoppingCart() {


    return (
        <div className={`container ${style.shoppingCartContainer}`}>
            <div className="row">
                <div className={`col-12 ${style.shopppingCartHeader}`}>
                  <p>shopping Cart</p>
                    <div className={style.closeShoppingcart}> <IoClose /> </div>
                </div>
            </div>
            <div className={`row ${style.contentContainer}`}>
                <div className="col-12">
                    <div className={style.flexContainer}>
                        <div className={style.item1}>
                            <button><RiDeleteBin6Fill size={24} /></button>
                        </div>
                        <div className={style.item2}>
                            <p>iphone 12</p>
                            <p>$1200</p>
                        </div>
                        <div>
                            <img src="https://dummyimage.com/45x45/000/fff" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={`row ${style.calcContainer}`}>
                <div className={`col-12 ${style.shopppingCartTotal}`}>
                    <p> TotalPrice:</p>
                    <p>355$</p>
                </div>
            </div>
            <div className={`row ${style.btncontainer}`}>
                <div className="col-12">
                    <a className="btn btn-primary">go user information page to pay</a>
                </div>
            </div>
        </div>
    )
}
export default ShoppingCart;