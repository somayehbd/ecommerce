import style from './Menu.module.css'


function Menu() {
    return (
        <ul className={`nav ${style.leftmenu}`}>
            <li className="nav-item">
                <a className="nav-link active" href="#">Active</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
                <a className="nav-link " href="#">Management</a>
            </li>
        </ul>
    )
}
export default Menu;