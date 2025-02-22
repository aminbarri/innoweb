import './navbar.css'
import logo from '../../assets/logo.png'; 
import {Link} from 'react-router-dom'
import { IoMdMenu } from "react-icons/io";

const Navbar =(props)=>{


    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-style" style={{backgroundColor:props.color }}>
            <div className="container-fluid px-5">
                <a className="navbar-brand" href="#"><img src={logo} alt="" width="100px"/></a>
                
                <span className="btn_menu" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <IoMdMenu />
                 </span>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav ">
                    <Link to='/' className="nav-link" href="#">Home</Link>
                    <Link to='/aboutus' className="nav-link" href="#">About Us</Link>
                    <Link to='' className="nav-link" href="#">Services</Link>
                    <Link to='' className="nav-link" href="#">Production Stages</Link>
                    <Link to='' className="nav-link" href="#">Our Clients</Link>
                    <Link to='/contact' className="nav-link" href="#">Contact</Link>   
                </div>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar;