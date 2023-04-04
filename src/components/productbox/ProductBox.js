import noimage from "./assets/productimg.jpg"
import style from './ProductBox.module.css'

const ProductBox = () => {
    return (<>
        <img className={style.img} src={noimage}></img>
    </>

    )
}
export default ProductBox;