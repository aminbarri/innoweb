import './choose.css'
import {Title1 } from '../../Component/index';
const Choose =(props)=>{


    return (
        <>
         <div className='choose d-flex flex-column align-items-center'>
          <Title1 title="Why choose us" color="var(--color-dark)" />
          <hr />
             <p>
             Timeline’s team has 10+ years of experience in TV, video, and marketing, 
             creating everything from news reports, documentaries to innovative digital
              solutions and live transmissions in both physical and virtual events.
               The agency’s dedicated team aims to be at the service of your brand 24/7 till you are beyond satisfied.
            <br /><br />
                For Timeline, it is not just about working with you on a project, 
                it is more of a partnership to deliver a long-term and everlasting impression and relationship.
            </p>
         </div>

        </>
    )
}

export default Choose;
