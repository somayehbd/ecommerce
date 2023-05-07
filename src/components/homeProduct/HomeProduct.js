
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import HomeProductBox from '../homeProductBox/HomeProductBox';

function HomeProduct() {
    //listener to search value(searchQuery)
    const searchQuery = useSelector(state => state.searchProductSlice.searchQuery)
    const [products, setProducts] = useState([]);
    

    useEffect(() => {
        fetch('http://localhost:3100/product')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setProducts(data)
            })
            .catch(error => {
                console.log("error: ", error)
            })
    }, [])

    return (
        searchQuery == '' ? products
        .map(item => {
           return (<HomeProductBox product={item}/>)
        }) : products
        .filter(item => { // pipline senario
            return item.name.toLowerCase().includes(searchQuery) ;
        })
        .map(item => {
            return (<HomeProductBox product={item}/>)
        })
    )
}
export default HomeProduct