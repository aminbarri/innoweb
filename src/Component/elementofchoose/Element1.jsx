import './element.css'
import { FaStar } from "react-icons/fa6";
import {Title1} from '../../Component/index';

const Element1 =(props)=>{


    return (
        <>
      
            <div className='d-flex flex-row'>
                <div className='element1'>
                    <h1>OUT STANDING QUALITY </h1>
                    <p>We strive to make every job unique in its own way by using
                         the highest technologies and the most creative minds</p>
                </div>
                <div>
                 <FaStar  />
                </div>
            </div>
            
        </>
    )
}

const Element2 =(props)=>{


    return (
        <>
      
            <div className='mission_section d-flex flex-column align-items-center'>
             {props.children}
             <hr />
             <p>
                {props.text}
            </p>
            </div>
            
        </>
    )
}

const Element3=(props)=>{
    return(
        <>
        <div className='midlesec'>
            {props.title}
        </div>
        </>
    );
}
export default Element1;
export {Element2}
export {Element3}