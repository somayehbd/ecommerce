import { searchProduct } from '../../Redux/searchProductSlice';
import style from './Search.module.css'
import { useDispatch } from 'react-redux';

function Search() {
    const dispatch=useDispatch();

    return (
        <>
            <form className="form-inline">
                <input className={`form-control mr-sm-2 ${style.search}`} type="search" placeholder="Search" aria-label="Search" onChange={(e)=> dispatch(searchProduct(e.target.value))}/>
            </form>
        </>
    )
}
export default Search;