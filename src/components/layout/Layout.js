import React from "react";
import './Layout.css';
import Menu from '../menu/Menu';


const Layout = () => {
    return (
        <div className="container-fluid">
            <div className="row topnav">
                <div className="col-6"><Menu/></div>
                <div className="col-6">shopping cart</div>
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
