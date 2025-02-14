import './mission.css'
import {Title1} from '../../Component/index';
const Mission =(props)=>{


    return (
        <>
            <div className='mission_section d-flex flex-column align-items-center'>
             <Title1 title='Our mission' />
             <hr />
             <p>
                Timeline aims to exceed the deliverables bar 
                and create a whole new modernized one that suits the world one currently lives in
            </p>
            </div>
            
        </>
    )
}

export default Mission;
