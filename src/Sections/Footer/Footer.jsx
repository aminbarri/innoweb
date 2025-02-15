import './footer.css'
import img1 from '../../assets/logo.png';
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { FaSquarePhone } from "react-icons/fa6";


const Footer =(props)=>{


    return (
        <>
           <div className='footer d-flex flex-column' >
                <div className='footersec1 row' >
                    <div className='col' >
                        <img src={img1} alt="" width=''/>
                    </div>
                    <div className='col d-flex flex-column justify-content-center' >
                        <h1 className='mb-2 titlecontact'>Contact</h1>
                        <div>
                            <h5>Address</h5>
                            <p className='ps-2'>
                                <FaLocationDot /> bd Massira El Khadra -ex Camille, 3° et., Grand Casablanca
                            </p>
                            <h5>Telephone</h5>
                            <p className='ps-2'>
                               <FaSquarePhone /> +212 522 989 661
                            </p>
                        </div>
                    </div>
                </div>
                <div className='footersec2 d-flex flex-row  align-items-center   px-5' >
                    <div className='' style={{ flex: 1, textAlign: 'left' }}>
                    © 2025 Developed By Innoweb Copy Rights Reserved 
                    </div>
                    <div className='' style={{ flex: 1, textAlign: 'center' }}>
                    <img src={img1} alt="" width='50px'/>
                    </div>
                    <div className=' d-flex flex-row justify-content-end' style={{ flex: 1, textAlign: 'right' }}>
                        <div className=' mx-1'>
                            <a href=""><FaFacebook /></a>
                        
                        </div>
                        <div className=' ' >
                            <a href=""><RiInstagramFill /></a>
                        
                        </div>
                        
                        
                    </div>
                </div>
           </div>
        </>
    )
}

export default Footer;