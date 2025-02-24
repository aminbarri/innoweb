import './aboutus.css';
import desk from '../../assets/desk.jpg';
import back1 from '../../assets/abou1.png';
import event from '../../assets/event.png';
import market from '../../assets/market.png';
import adve from '../../assets/adven.png';
import digital from '../../assets/Digitals.png';
import team from '../../assets/team.png';



import {Card1 ,Title1} from '../../Component/index';
import { GrMultimedia } from "react-icons/gr";
import { MdEventNote } from "react-icons/md";
import { SiGooglemarketingplatform } from "react-icons/si";
import { LiaShareAltSolid } from "react-icons/lia";
import { FaDigitalOcean } from "react-icons/fa";
import { GiTeamIdea } from "react-icons/gi";



const Aboutus =(props)=>{


    return (
        <>
            <div className='d-flex flex-column  aboutus'>
                <Title1 title='About Us' />
                <div className=' aboutus_content '>
                    <div className=' about_text'>
                        <h1>We are <br />
                        INNOWEB AGENCY</h1>
                        <p className='text_agency'>
                        With a strong presence in the MENA region and Canada,
                         Timeline is a full-service media production agency providing comprehensive production solutions. 
                         Renowned for its creativity, exceptional quality, and professionalism,
                         Timeline has built a solid reputation in the industry  </p>
                    </div>
                    <div>
                        <img src={desk} alt="" width='500px' height='300px' className='image_500_300_head'/>
                    </div>
                </div>
            </div>
            <div className='acivite'>
                <div className='row m-0'>
                    <Card1  title='Media Production' background={back1}><GrMultimedia style={{  fontSize: "100px" }} className='icons' /> </Card1>
                    <Card1  title='Event Management' background={event}><MdEventNote style={{  fontSize: "100px" }} className='icons' /> </Card1>
                    <Card1  title='Marketing Solutions' background={market}><SiGooglemarketingplatform style={{  fontSize: "100px" }} className='icons' /> </Card1>
                </div>
                <div className='row m-0'>
                    <Card1  title='Advertising Solutions' background={adve} ><LiaShareAltSolid style={{  fontSize: "100px" }} className='icons' /> </Card1>
                    <Card1  title='Digital Solutions' background={digital} ><FaDigitalOcean style={{  fontSize: "100px" }} className='icons' /> </Card1>
                    <Card1  title='Team Building'  background={team} ><GiTeamIdea style={{  fontSize: "100px" }} className='icons' /> </Card1>
                </div>
            </div>
            
        </>
    )
}

export default Aboutus;