import React from "react";
import style from './Layout.module.css';
import Menu from '../menu/Menu';
import Cart from "../cart/Cart";
import Search from "../search/Search";
import Leftfoot from "../footbar/leftfoot/Leftfoot";


const Layout = () => {
    return (
        <div className="container-fluid">
            <div className={`row ${style.topnav}`}>
                <div className="col-5"><Menu /></div>
                <div className="col-5"><Search /></div>
                <div className="col-2"><Cart /></div>
            </div>
            <div className="row content">
                <div className="col-4">product</div>
                <div className="col-4">product</div>
                <div className="col-4">product</div>
            </div>
            <div className={`row ${style.footer}`}>
                <div className="col-4"><Leftfoot/></div>
                <div className="col-4">footer</div>
                <div className="col-4">footer</div>
            </div>
        </div>
    )

}
export default Layout;
