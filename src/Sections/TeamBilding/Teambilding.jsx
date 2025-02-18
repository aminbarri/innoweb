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
                <div className='d-flex flex-row'>
                    <div className='firstsec  card_img'>
                    
                        <h1>Outstanding Events
                        </h1>
                        <p>
                        We strive to make every event unique in its own way by using the highest 
                        technologies and the most creative minds
                        </p>
                        <div class="overlay">
                    </div>
                    </div>
                    <div className='secendsec card_img'>
                    
                        <h1>Outstanding Events
                        </h1>
                        <p>
                        We strive to make every event unique in its own way by using the highest 
                        technologies and the most creative minds
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
                            To stretch beyond expectations, becoming the top leading media production agency on a multinational scale.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='row m-0 sec_2_row'>
                    <div className='col-lg-6 p-0'>
                        <div className=' text_5'>
                            <h1>Our <span>Mission</span></h1>
                            <h2>To Achieve the Unthinkable</h2>
                            <p>
                            To stretch beyond expectations, becoming the top leading media production agency 
                            on a multinational scale.
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