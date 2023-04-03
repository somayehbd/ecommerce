import React from "react";
import style from './Layout.module.css';
import Menu from '../menu/Menu';
import Cart from "../cart/Cart";


const Layout = () => {
    return (
        <div className="container-fluid">
            <div className={`row ${style.topnav}`}  >
                <div className="col-10"><Menu /></div>
                <div className="col-2"><Cart /></div>
            </div>
            <div className="row search">
                <div className="col-12"> search</div>
            </div>
            <div className="row content">
                <div className="col-4">product</div>
                <div className="col-4">product</div>
                <div className="col-4">product</div>
            </div>
            <div className="row footer">
                <div className="col-4">footer</div>
                <div className="col-4">footer</div>
                <div className="col-4">footer</div>
            </div>
        </div>
    )

}
export default Layout;
