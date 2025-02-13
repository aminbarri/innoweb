import './aboutus.css';
import desk from '../../assets/desk.jpg';
import {Card1} from '../../Component/index';
const Aboutus =(props)=>{


    return (
        <>
            <div className='d-flex flex-column  aboutus'>
                <div className='py-5 aboutus_title'>
                    <h1>About Us</h1>
                </div>
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
            <div>
                <Card1 icon='sdfsdf' title='sdfsdf' />
            </div>
        </>
    )
}

export default Aboutus;