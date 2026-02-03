import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

function DefaultLayout({ onSearch }) {
    return <>
    // Default layout that displays the Navbar and renders nested routes via Outlet
        <Navbar onSearch={onSearch} /> // Function passed to the Navbar to handle product search
        <Outlet />
    </>
}

export default DefaultLayout;