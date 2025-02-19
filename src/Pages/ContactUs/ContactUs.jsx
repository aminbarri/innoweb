import './contactus.css'
import { Footer} from '../../Sections/index'; 
import {Navbar,TopHead,Element2,Title1,BoxContact} from '../../Component/index';
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";

import { CiHeadphones } from "react-icons/ci";

const ContactUs=()=>{
    return(
        <>
        <div className='contact_page'>

        <Navbar />
        <TopHead title='Contact' description='Get in touch with us!' />
        <Element2 text=''>
                    <Title1 title='GET IN TOUCH!' />
        </Element2>
        <div className='row px-5 m-0'>
        
            <BoxContact title='ADDRESS' info='bd Massira El Khadra -ex Camille, 3° et., Grand Casablanca' color='rgb(98, 199, 194)'>
             <CiLocationOn />
            </BoxContact>

            <BoxContact  color='rgb(148, 28, 138)'></BoxContact>

            <BoxContact title='PHONE' info='+212 522 989 661' >
            <CiHeadphones />
            </BoxContact>

            <BoxContact title='Mail' info='support@innoweb.com'  color='rgb(226, 83, 0)'>
                <CiMail />
            </BoxContact>
            
                </div>
                <div className='row formmessage m-5 py-5'>
            <div className='col leavemsg d-flex justify-content-center align-items-center'>
                <h1 className=' text-center'>
                    Leave us a<br/> message!
                </h1>
            </div>
            <div className='col'>
                    <form action="" className='d-flex flex-column formsubmit'>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="" />
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" />
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id=""></textarea>
                    <input type="submit" value="Submit" />
                    </form>
            </div>
        </div>
        <Footer />
        </div>
       
        </>
    );
}
export default ContactUs;