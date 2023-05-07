
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import HomeProductBox from '../homeProductBox/HomeProductBox';

function HomeProduct() {
    //listener to search value(searchQuery)
    const searchQuery = useSelector(state => state.searchProductSlice.searchQuery)
    const [products, setProducts] = useState([]);
    

    useEffect(() => {
        fetch('http://localhost:3100/product')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setProducts(data)
            })
            .catch(error => {
                console.log("error: ", error)
            })
    }, [])

    return (
        searchQuery == '' ? products.map(item => {
            // return (
            //     <div className="col-3" key={item.id}>
            //         <Link to={`/detail/${item.seoName}`}>
            //             <img src={item.image} className={style.image} />
            //         </Link>
            //         <div className={style.productdetail}>
            //             <Link to={`/detail/${item.seoName}`}>
            //                 <p>{item.name}</p>
            //             </Link>
            //             <p>{"$" + item.price}</p>
            //             <p>{item.description.substring(0, 40)}...</p>
            //             <a href="#" className={`btn btn-primary ${style.button}`} onClick={() => handleClick(item.id, item.name, item.price, item.image)}>ADD TO CART</a>

            //         </div>
            //     </div>
            // )
           return (<HomeProductBox product={item}/>)
        }) : products.filter(item => { // pipline senario
            return item.name.toLowerCase().includes(searchQuery) ;
        }).map(item => {
            return (
                 (<HomeProductBox product={item}/>)
                // <div className="col-3" key={item.id}>
                //     <Link to={`/detail/${item.seoName}`}>
                //         <img src={item.image} className={style.image} />
                //     </Link>
                //     <div className={style.productdetail}>
                //         <Link to={`/detail/${item.seoName}`}>
                //             <p>{item.name}</p>
                //         </Link>
                //         <p>{"$" + item.price}</p>
                //         <p>{item.description.substring(0, 40)}...</p>
                //         <a href="#" className={`btn btn-primary ${style.button}`} onClick={() => handleClick(item.id, item.name, item.price, item.image)}>ADD TO CART</a>

                //     </div>
                // </div>
            )
        })
    )
}
export default HomeProduct