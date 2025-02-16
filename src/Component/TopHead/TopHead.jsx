import './tophead.css';
import { FaArrowRight } from "react-icons/fa";

const TopHead=()=>{
    return(
        <>
         <div className='d-flex flex-column px-5 head_top'>
            <h1>About Us</h1>
            <hr />
            <p>
            We’re on a mission to start a conversation with your customers in this fast connected world. 
            Let’s discover, build and grow your digital business!
            </p>
            <div className='routepage d-flex flex-row'>
                <span className='page_home'>Home</span>
                <div className='px-3'>
                    <FaArrowRight />
                </div>
                
                <span className='page_name'>About Us</span>
            </div>
         </div>
        </>
    );
}
export default TopHead;