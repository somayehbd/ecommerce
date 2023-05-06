import Menu from '../menu/Menu';
import CartIcon from '../cartIcon/CartIcon'
import Search from "../search/Search";
import LeftFooter from "../leftFooter/LeftFooter";
import Support from "../support/Support";
import Map from "../map/Map";
import { Outlet } from 'react-router-dom';
import style from './Layout.module.css';

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
                <div className="col-4"><LeftFooter /></div>
                <div className="col-4"><Support /></div>
                <div className="col-4"><Map /></div>
            </div>
        </div >
    )
}
export default Layout;
