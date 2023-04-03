import style from './Search.module.css'
function Search() {
    return (
        <form className="form-inline">
            <input className={`form-control mr-sm-2 ${style.search}`} type="search" placeholder="Search" aria-label="Search" />
        </form>

    )
}
export default Search;