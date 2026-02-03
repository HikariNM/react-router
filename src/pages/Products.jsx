import { useEffect, useState } from 'react'
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.css';
import { Link, useNavigate } from 'react-router-dom';

function Products({ searchTerm = '' }) {
    // Receives searchTerm as a prop

    // State that has the original products list
    const [products, setProducts] = useState([]);
    // State that has the products list that is being searched
    const [searchedProducts, setSearchedProducts] = useState([]);


    function getData() {
        const apiUrl = 'https://fakestoreapi.com/products'

        axios.get(apiUrl).then(res => {
            console.log('Incoming data:', res.data)
            setProducts(res.data)
            setSearchedProducts(res.data)
        }).catch(error => {
            console.log('Something is broken...', error.message);
        })
    }

    useEffect(getData, [])

    // Filters products whenever searchTerm changes
    useEffect(() => {
        // If there is no search term, show all products
        if (searchTerm === '') {
            setSearchedProducts(products)
        } else {
            // Filters products whose title contains what is being searched
            const searched = products.filter(product =>
                product.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
            setSearchedProducts(searched)
            console.log('Searched data:', searchedProducts)
        }
    }, [searchTerm, products]) // This useEffect runs every time searchTerm changes



    return <>
        <div className='container my-4'>
            <div className='row g-4 container justify-content-center'>
                {searchedProducts.map((product) => (

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