import './element.css'
import { FaStar } from "react-icons/fa6";
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

export default Element1;