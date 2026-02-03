import { useEffect, useState } from 'react'
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css'
import { Link, useNavigate } from 'react-router-dom';

function Products({ searchTerm = '' }) {
    // Receives searchTerm as a prop

    // State that has the original products list
    const [products, setProducts] = useState([]);
    // State that has the products list that is being searched
    const [searchedProducts, setSearchedProducts] = useState([]);
    // Sate for loading message
    const [loading, setLoading] = useState(true);


    function getData() {
        const apiUrl = 'https://fakestoreapi.com/products'

        axios.get(apiUrl).then(res => {
            console.log('Incoming data:', res.data)
            setProducts(res.data)
            setSearchedProducts(res.data)
            setLoading(false)
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





    if (loading) {
        return <div className='container my-4'>Loading products...</div>
    } return <>
        <div className='container my-4'>
            <div className='row g-4 container justify-content-center'>
                {searchedProducts.length > 0 ? (
                    searchedProducts.map((product) => (
                        <div key={product.id} className="card bg-dark text-white col-12 col-md-3" >
                            <img src={product.image} className="card-img-top card-img-fixed " alt={product.title} />
                            <div className="card-body">
                                <p className="card-text m-0 fst-italic">{product.category}</p>
                                <Link to={`/products/${product.id}`}><h4 className="card-title product-link">{product.title}</h4> </Link>
                                <p className="card-text fst-italic ">{product.price}€</p>
                            </div>
                        </div>))
                ) : (<div className='text-center'><p>No product found for "{searchTerm}"</p></div>)
                }

            </div >
        </div >
    </>
}

export default Products