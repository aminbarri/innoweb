import './messagesection.css'
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { MdAddLocationAlt } from "react-icons/md";

import { CiHeadphones } from "react-icons/ci";

import {Element2 ,Title1,BoxContact } from '../../Component/index';
const Messagesection =(props)=>{


    return (
        <>
            <div className='msg d-flex flex-column'>
                <Element2 text=''>
                    <Title1 title='GET IN TOUCH!' />
                </Element2>
                <div className=' box_info row  m-0 '>
                    <BoxContact title='ADDRESS' info='bd Massira El Khadra -ex Camille, 3° et., Grand Casablanca' color='rgb(98, 199, 194)'>
                        <CiLocationOn />
                    </BoxContact>
        
                    <BoxContact title='ADDRESS 2' info='197, rue des Thermes la Villette, Grand Casablanca' color='rgb(148, 28, 138)'>
                        <MdAddLocationAlt />
                    </BoxContact>
        
                    <BoxContact title='PHONE' info='+212 522 989 661' >
                    <CiHeadphones />
                    </BoxContact>
        
                    <BoxContact title='Mail' info='support@innoweb.com'  color='rgb(226, 83, 0)'>
                        <CiMail />
                    </BoxContact>
                </div>
                <div className='formmessage  '>
                    <div className=' leavemsg d-flex justify-content-center align-items-center'>
                        <h1 className=' text-center'>
                            Leave us a<br/> message!
                        </h1>
                    </div>
                    <div className='from_cls'>
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
            </div>
           
            
        </>
    )
}

export default Messagesection;
