import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function ProductDetailsPage() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState(null);

    function getData() {
        const apiUrl = `https://fakestoreapi.com/products/${id}`

        const checkId = parseInt(id);
        if (checkId < 1 || checkId > 20) {
            navigate('/products');
            return;
        }

        axios.get(apiUrl).then(res => {
            console.log('Dati arrivati:', res.data)
            setProduct(res.data)
        }).catch(error => {
            console.log('Si è rotto qualcosa...', error.message);
            navigate('/products');
        })
    };

    useEffect(getData, [id]);

    if (product == null) {
        return <div>Caricamento in corso</div>
    }
    else {
        return <div className='container my-4'>
            <div className='row g-4 container justify-content-center'>
                <div key={product.id} className="bg-dark text-white col-12 col-md-4" >
                    <img src={product.image} className="card-img-top card-img-fixed" alt={product.title} />
                    <div className="">
                        <h3 className="">{product.title}</h3>
                        <p className="fst-italic">{product.category} </p>
                        <p className="fw-bold">{product.price}€</p>
                        <p className="">{product.description}</p>
                        <p className="text-end">{product.rating.rate}⭐</p>
                    </div>
                </div>


            </div >
            <div className='row '>
                <div className="col d-flex justify-content-between">
                    <Link className="btn btn-warning" to={`/products/${parseInt(id) - 1}`}>Previous Page</Link>
                    <Link className="btn btn-warning" to={`/products/${parseInt(id) + 1}`}>Next Page</Link>
                    {/* <button className="btn btn-warning" onClick={() => navigate(`/products/${parseInt(id) - 1}`)} disabled={parseInt(id) <= 1}>Previous Page</button> */}
                    {/* <button className="btn btn-warning" onClick={() => navigate(`/products/${parseInt(id) + 1}`)}>Next Page</button> */}
                </div>
            </div>
        </div >
    }

}
export default ProductDetailsPage;
