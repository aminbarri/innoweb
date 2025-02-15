import './messagesection.css'
import { CiLocationOn } from "react-icons/ci";

import { CiHeadphones } from "react-icons/ci";

import {Element2 ,Title1 } from '../../Component/index';
const Messagesection =(props)=>{


    return (
        <>
            <div className='msg d-flex flex-column'>
                <Element2 text=''>
                    <Title1 title='GET IN TOUCH!' />
                </Element2>
                <div className='row px-5 m-0'>
                    <div className='box_msg box_msg1  col m-0'>
                       <div className='iconbtm'>
                        <CiLocationOn />
                       </div>
                       
                        <h4>ADDRESS</h4>
                        <p className='px-2 text-center'>
                        bd Massira El Khadra -ex Camille, 3° et., Grand Casablanca
                        </p>
                    </div>
                    <div className='box_msg box_msg2 col m-0'>
                        
                    </div>
                    <div className='box_msg box_msg3 col m-0'>
                        <div className='iconbtm'>
                            <CiHeadphones />
                        </div>
                        
                        <h4>PHONE</h4>
                        <p className='px-2 text-center'>
                         +212 522 989 661
                        </p>
                    </div>
                    <div className='box_msg box_msg4 col m-0'>
                        
                    </div>
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
            </div>
           
            
        </>
    )
}

export default Messagesection;
