
import { useState, useEffect } from 'react';

function HomeProduct() {

    const [product, setproduct] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3100/product')
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log(data)
                setproduct(data)
            })
            .catch(error => {
                console.log("error: ", error)
            })
    }, [])

    return (
        <>
            {
                product.map(item => {
                    return (
                        <div className="col-4" key={item.id}>
                            <img src={item.image} />
                            <div>
                                <p>{item.name}</p>
                                <p>{item.price}</p>
                                <p>{item.description.substring(0, 40)}...</p>
                            </div>
                        </div>
                    )
                })
            }

        </>
    )
}
export default HomeProduct