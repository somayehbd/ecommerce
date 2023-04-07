
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
                            <Link to={`/detail/${item.seoName}`}>
                                <img src={item.image} />
                            </Link>
                            <div>
                                <Link to="/detail">
                                    <p>{item.name}</p>
                                </Link>
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