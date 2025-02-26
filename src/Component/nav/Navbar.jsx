import './navbar.css'
import logo from '../../assets/logo.png'; 
import {Link} from 'react-router-dom'
import { IoMdMenu } from "react-icons/io";

const Navbar =(props)=>{


    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-style" style={{backgroundColor:props.color }}>
            <div className="container-fluid px-5">
                <Link to='/' className="navbar-brand" ><img src={logo} alt="" width="100px"/></Link>
                
                <span className="btn_menu" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <IoMdMenu />
                 </span>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav ">
                    <Link to='/' className="nav-link" >Home</Link>
                    <Link to='/aboutus' className="nav-link" >About Us</Link>
                    <Link to='/contact' className="nav-link" >Contact</Link>   
                </div>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar;