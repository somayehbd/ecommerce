import { useDispatch } from "react-redux"
import { addToShoppingCart } from '../../Redux/shoppingCartSlice'
import { Link } from 'react-router-dom';
import style from "./HomeProductBox.module.css";

function HomeProductBox(props) {
    //distruct object
    const { product } = props;
    const dispatch = useDispatch();

    const handleClick = (id, name, price, image) => {
        dispatch(addToShoppingCart({ id: id, name: name, price: price, image: image }))
    }

    return (
        <div className="col-3" key={product.id}>
            <Link to={`/detail/${product.seoName}`}>
                <img src={product.image} className={style.image} />
            </Link>
            <div className={style.productdetail}>
                <Link to={`/detail/${product.seoName}`}>
                    <p>{product.name}</p>
                </Link>
                <p>{"$" + product.price}</p>
                <p>{product.description.substring(0, 40)}...</p>
                <a href="#" className={`btn btn-primary ${style.button}`} onClick={() => handleClick(product.id, product.name, product.price, product.image)}>ADD TO CART</a>

            </div>
        </div>
    )
}

export default HomeProductBox;