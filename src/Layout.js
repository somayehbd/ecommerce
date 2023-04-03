import React from "react";
import './layout.css';

const Layout = () => {
    return (
        <div class="container-fluid">
            <div class="row topnav">
                <div class="col-6">menu</div>
                <div class="col-6">shopping cart</div>
            </div>
            <div class="row search">
                <div class="col-12"> search</div>
            </div>
            <div class="row content">
                <div class="col-4">product</div>
                <div class="col-4">product</div>
                <div class="col-4">product</div>
            </div>
            <div class="row footer">
                <div class="col-4">footer</div>
                <div class="col-4">footer</div>
                <div class="col-4">footer</div>
            </div>
        </div>
    )

}
export default Layout;
