import './tophead.css';
import { FaArrowRight } from "react-icons/fa";

const TopHead=(props)=>{
    return(
        <>
         <div className='d-flex flex-column px-5 head_top'>
            <h1>{props.title}</h1>
            <hr />
            <p>
             {props.description}
            </p>
            <div className='routepage d-flex flex-row'>
                <span className='page_home'>Home</span>
                <div className='px-3'>
                    <FaArrowRight />
                </div>
                
                <span className='page_name'>{props.title}</span>
            </div>
         </div>
         
        </>
    );
}
export default TopHead;