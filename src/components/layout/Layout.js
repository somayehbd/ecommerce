import style from './Layout.module.css';
import Menu from '../menu/Menu';
import CartIcon from '../cart/CartIcon'
import Search from "../search/Search";
import Leftfoot from "../leftfoot/Leftfoot";
import Support from "../support/Support";
import Map from "../map/Map";
import HomeProduct from '../homeproduct/HomeProduct';
import { Outlet } from 'react-router-dom';

const Layout = () => {

    return (
        < div className="container-fluid" >
            <div className={`row ${style.topnav}`}>
                <div className="col-5"><Menu /></div>
                <div className="col-5"><Search /></div>
                <div className="col-2"><CartIcon/></div>
            </div>
            <div className={`row ${style.content}`}>
          <Outlet/>
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
