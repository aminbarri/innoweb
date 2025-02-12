import './navbar.css'
import logo from '../../assets/logo.png'; 
const Navbar =(props)=>{


    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-style">
            <div className="container-fluid px-5">
                <a className="navbar-brand" href="#"><img src={logo} alt="" width="80px"/></a>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav ">
                    <a className="nav-link" href="#">Home</a>
                    <a className="nav-link" href="#">About Us</a>
                    <a className="nav-link" href="#">Services</a>
                    <a className="nav-link" href="#">Production Stages</a>
                    <a className="nav-link" href="#">Our Clients</a>
                    <a className="nav-link" href="#">Contact</a>   
                </div>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar;