import './choose.css'
import {Title1 ,Element1 } from '../../Component/index';
const Choose =(props)=>{


    return (
        <>
         <div className='choose d-flex flex-column align-items-center'>
            
          <Title1 title="Why choose us" color="var(--color-dark)" />
          <hr />
             <p>
             With over a decade of experience in TV, video, and marketing,
              Timeline’s team specializes in creating everything from 
              news reports and documentaries to cutting-edge digital 
              solutions and live broadcasts for both physical and virtual events. 
              Dedicated to your brand’s success, our team is available 24/7 to ensure your complete satisfaction.
              <br /><br />
              At Timeline, we don’t just work on projects—we build lasting partnerships,
               leaving a long-term impact and fostering enduring relationships.
            </p>
         </div>
         <div>
            <Element1 />
         </div>

        </>
    )
}

export default Choose;
