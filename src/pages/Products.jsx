import { useEffect, useState } from 'react'
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

function Products() {

    // State che contiene la lista dei prodotti
    const [products, setProducts] = useState([]);

    function getData() {
        const apiUrl = 'https://fakestoreapi.com/products'

        axios.get(apiUrl).then(res => {
            console.log('Dati arrivati:', res.data)
            setProducts(res.data)
        }).catch(error => {
            console.log('Si è rotto qualcosa...', error.message);
        })
    }

    useEffect(getData, [])
    return <>
        <div className='container my-4'>
            <div className='row g-4 container justify-content-center'>
                {products.map((product) => (

                    <div key={product.id} className="card bg-dark text-white col-12 col-md-3" >
                        <img src={product.image} className="card-img-top card-img-fixed" alt={product.title} />
                        <div className="card-body">
                            <Link to={`/products/${product.id}`}><h3 className="card-title">{product.title}</h3> </Link>
                            <p className="card-text">{product.price}€</p>
                            <p className="card-text">{product.category}</p>
                        </div>
                    </div>
                ))}

            </div >
        </div >
    </>
}

export default Products