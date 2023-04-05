import style from './Layout.module.css';
import Menu from '../menu/Menu';
import Cart from "../cart/Cart";
import Search from "../search/Search";
import Leftfoot from "../leftfoot/Leftfoot";
import Support from "../support/Support";
import Map from "../map/Map";
// import ProductBox from "../productbox/ProductBox";
import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {

    // const [product, setproduct] = useState([]);

    // useEffect(() => {
    //     fetch('http://localhost:3100/product')
    //         .then(res => {
    //             return res.json()
    //         })
    //         .then(data => {
    //             console.log(data)
    //             setproduct(data)
    //         })
    //         .catch(error => {
    //             console.log("error: ", error)
    //         })
    // }, [])

    return (
        < div className="container-fluid" >
            <div className={`row ${style.topnav}`}>
                <div className="col-5"><Menu /></div>
                <div className="col-5"><Search /></div>
                <div className="col-2"><Cart /></div>
            </div>
            <div className={`row ${style.content}`}>
                <Outlet/>
                {/* {
                    product.map(item => {
                        return (
                            <div className="col-4" key={item.id}>
                                <img src={item.image} />
                                <div>
                                    <p>{item.name}</p>
                                    <p>{item.price}</p>
                                    <p>{item.description.substring(0,40)}...</p>
                                </div>
                            </div>
                        )
                    })
                } */}
            </div>
            <div className={`row ${style.footer}`}>
                <div className="col-4"><Leftfoot /></div>
                <div className="col-4"><Support /></div>
                <div className="col-4"><Map /></div>
            </div>
        </div >
    )

}
export default Layout;
