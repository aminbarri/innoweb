import './teambilding.css';
import img1 from '../../assets/adven.png'
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
                    </div>
                    <div className='secendsec card_img'>
                        <h1>Outstanding Events
                        </h1>
                        <p>
                        We strive to make every event unique in its own way by using the highest 
                        technologies and the most creative minds
                        </p>
                    </div>
                </div>
            </div>
            <div className='section_2'>
                <div className='row m-0 '>
                    <div className='col p-0'>
                        <img src={img1} alt="" width='100%' height=''/>
                    </div>
                    <div className='col text_5'>
                        <h1>Our <span>Mission</span></h1>
                        <h2>To Achieve the Unthinkable</h2>
                        <p>
                        To stretch beyond expectations, becoming the top leading media production agency on a multinational scale.
                        </p>
                    </div>
                </div>
                <div className='row m-0 '>
                    
                    <div className='col text_5'>
                        <h1>Our <span>Mission</span></h1>
                        <h2>To Achieve the Unthinkable</h2>
                        <p>
                        To stretch beyond expectations, becoming the top leading media production agency on a multinational scale.
                        </p>
                    </div>
                    <div className='col p-0'>
                        <img src={img1} alt="" width='100%' height=''/>
                    </div>
                </div>
            </div>
          </div>
        </>
    );
}
export default Teambilding;