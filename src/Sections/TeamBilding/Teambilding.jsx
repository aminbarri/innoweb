import './teambilding.css';

import img3 from '../../assets/phone.jpg'
import img4 from '../../assets/pc1.jpg'

const Teambilding=(props) =>{
    return(
        <>

          <div>
            <div className='px-5 section_1'>
                <h1>OUR Target
                </h1>
                <div className='d-flex flex-row '>
                    <div className='firstsec  card_img'>
                    
                        <h1>Outstanding Events
                        </h1>
                        <p>
                        We are committed to making each event truly one-of-a-kind by leveraging
                         cutting-edge technology and the most innovative minds
                        </p>
                        <div class="overlay">
                        </div>
                    </div>
                    <div className='secendsec card_img'>
                    
                        <h1>Fully-Satisfied Clients
                        </h1>
                        <p>
                        Our top priority is ensuring the ultimate satisfaction of our clients. At Timeline,
                         you're more than just a client—you’re a valued, long-term partner
                        </p>
                        <div class="overlay">
                         </div>
                    </div>
                </div>
            </div>
            <div className='section_2'>
                <div className='row m-0 sec_2_row'>
                    <div className='col-lg-6 p-0'>
                        <img src={img3} alt=""  className='image_style'/>
                    </div>
                    <div className='col-lg-6 p-0'>
                        <div className=' text_5 '>
                            <h1>Our <span>Mission</span></h1>
                            <h2>To Achieve the Unthinkable</h2>
                            <p>
                            To exceed expectations and establish ourselves
                             as the leading media production agency on a global scale
                            </p>
                        </div>
                    </div>
                </div>
                <div className='row m-0 sec_2_row'>
                    <div className='col-lg-6 p-0'>
                        <div className=' text_5'>
                            <h1>Our <span> Vision </span></h1>
                            <h2>To Infinity and Beyond</h2>
                            <p>
                            Timeline strives to go beyond expectations, 
                            setting a new, modern standard that aligns with today's ever-evolving world
                            </p>
                        </div>
                    </div>
                    
                    <div className='col-lg-6 p-0'>
                        <img src={img4} alt="" className='image_style'/>
                    </div>
                </div>
            </div>
          </div>
        </>
    );
}
export default Teambilding;