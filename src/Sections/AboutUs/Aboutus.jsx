import './aboutus.css';
import desk from '../../assets/desk.jpg';
import {Card1 ,Title1} from '../../Component/index';
import { FaStar } from "react-icons/fa6";

const Aboutus =(props)=>{


    return (
        <>
            <div className='d-flex flex-column  aboutus'>
                <Title1 title='About Us' />
                <div className='d-flex flex-row aboutus_content align-self-stretch'>
                    <div className='px-5 about_text'>
                        <h1>We are <br />
                        INNOWEB AGENCY</h1>
                        <p className='text_agency'>
                        Firmly established in MENA region and Canada,
                         Timeline is a full-fledged media production agency that offers fully inclusive production services. 
                        The agency has gained its reputation for its creativity, outstanding quality and professionalism.
                        </p>
                    </div>
                    <div>
                        <img src={desk} alt="" width='500px' height='300px'/>
                    </div>
                </div>
            </div>
            <div className='acivite'>
                <div className='row m-0'>
                    <Card1  title='Media Production' ><FaStar style={{  fontSize: "100px" }} className='icons' /> </Card1>
                    <Card1  title='EVENT Management' ><FaStar style={{  fontSize: "100px" }} className='icons' /> </Card1>
                    <Card1  title='Marketing Solutions' ><FaStar style={{  fontSize: "100px" }} className='icons' /> </Card1>
                </div>
                <div className='row m-0'>
                    <Card1  title='Advertising Solutions' ><FaStar style={{  fontSize: "100px" }} className='icons' /> </Card1>
                    <Card1  title='Digital Solutions' ><FaStar style={{  fontSize: "100px" }} className='icons' /> </Card1>
                    <Card1  title='Team Buildin' ><FaStar style={{  fontSize: "100px" }} className='icons' /> </Card1>
                </div>
            </div>
            
        </>
    )
}

export default Aboutus;