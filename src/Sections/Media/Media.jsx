import "./media.css"
import back1 from '../../assets/horse.jpg';

import {Card1 } from '../../Component/index';
import { GoFileMedia } from "react-icons/go";
import { BsCalendarEvent } from "react-icons/bs";
import { SiWesterndigital } from "react-icons/si";
import { GiChainedArrowHeads } from "react-icons/gi";
import { CiShare2 } from "react-icons/ci";


const Media=()=>{
    return(
        <>
            <div className="row m-0 p-0 media_img">
                <div className="col p-0">
                <Card1  title='Media Production' background={back1} class_secondary='big_box'><GoFileMedia style={{  fontSize: "100px"  }} className='icons' /> </Card1>

                </div>
                <div className="col p-0">
                    <div className="row m-0 p-0">
                    <Card1  title='EVENTS Management'  class_secondary='first_box'><BsCalendarEvent style={{  fontSize: "100px"  }} className='icons' /> </Card1>
                    <Card1  title='Digital Solutions'  class_secondary='sec_box' ><SiWesterndigital style={{  fontSize: "100px"  }} className='icons' /> </Card1>

                    </div>
                    <div className="row m-0 p-0">
                    <Card1  title='Marketing'  class_secondary='sec_box' ><CiShare2 style={{  fontSize: "100px"  }} className='icons' /> </Card1>
                    <Card1  title='Advertising'    class_secondary='first_box' ><GiChainedArrowHeads style={{  fontSize: "100px"  }} className='icons' /> </Card1>

                    </div>
                   
                </div>
            </div>
        </>
    );
}
export default Media;