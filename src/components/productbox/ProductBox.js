import noimage from "./assets/productimg.png"
import style from './ProductBox.module.css'

const ProductBox = () => {
    return (<>
        <img className={style.img} src={noimage}></img>
        <div className={style.productontent}>
            <p>product title</p>
            <p>product price</p>
        </div>
    </>

    )
}
export default ProductBox;