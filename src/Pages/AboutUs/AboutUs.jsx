import './aboutus.css';
import { Footer,Media,Teambilding} from '../../Sections/index'; 
import {Navbar , TopHead,Element3} from '../../Component/index';

const AboutUs =()=>{
    return(
        <>
        <div className='header_1'>
            <Navbar color='' />
            <TopHead title='About Us' description='Our goal is to connect with your customers in today&apos;s fast-paced digital world. Let&apos;s explore, create, and expand your online business together!' />
        </div>
            
            <Element3 title='An All-in-One Agency' />
            <Media />
            <Element3 title='Team building' />
            <Teambilding />
            <Footer />
        
        </>
    );
}
export default AboutUs;