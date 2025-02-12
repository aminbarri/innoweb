import './header.css'
import {Navbar} from '../../Component/index';
import {Headeritem} from '../../Component/index';
const Header =(props)=>{


    return (
        <>
        <div className='header'>
            <Navbar />
        <Headeritem />
        </div>
        
        </>
    )
}

export default Header;