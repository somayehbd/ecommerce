import { Link } from 'react-router-dom';
import style from './Menu.module.css'

function Menu() {
    return (
        <ul className={`nav ${style.leftmenu}`}>
            <li className="nav-item">
                <Link to={`/`} className="nav-link active">
                    Home
                </Link>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">

                <Link to={'/admin'} className="nav-link " >
                    Management</Link>
            </li>
        </ul>
    )
}
export default Menu;