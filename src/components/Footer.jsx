import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'

function Footer() {

    return <>
        <footer className="row container-fluid bg-warning py-3 text-dark mt-">

            <div className="col-9 d-flex flex-column ps-5">
                <Link to="/"><h3>Logo</h3></Link>

                <ul className="d-flex gap-4 list-unstyled py-2">
                    <li><Link to="/">Legal Info</Link></li>
                    <li><Link to="/">Privacy Policy</Link></li>
                    <li><Link to="/">Return Policy</Link></li>
                </ul>
            </div >

            <div className="col-3 d-flex align-items-center flex-column">
                <h4>Follow us</h4>
                <div className="fs-4 d-flex gap-2 py-2">
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-instagram"></i></a>
                    <a href="#"><i className="fa fa-pinterest"></i></a>
                    <a href="#"><i className="fa fa-youtube-play"></i></a>
                </div>
            </div>


        </footer >
    </>
}

export default Footer