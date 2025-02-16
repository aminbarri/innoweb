import './aboutus.css';
import { Footer,Media} from '../../Sections/index'; 
import {Navbar , TopHead,Element3} from '../../Component/index';

const AboutUs =()=>{
    return(
        <>
        
            <Navbar color='var(--color-accent1)' />
            <TopHead title='About Us' description='We’re on a mission to start a conversation with your customers in this fast connected world. 
            Let’s discover, build and grow your digital business!' />
            <Element3 title='An All-in-One Agency' />
            <Media />
            <Element3 title='Team building' />
            <Footer />
        
        </>
    );
}
export default AboutUs;