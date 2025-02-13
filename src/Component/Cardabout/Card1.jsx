import './card1.css'
import back from '../../assets/desk.jpg';
const Card1 =(props)=>{


    return (
        <>
         
        <div className='card_body' style={{backgroundImage:`url(${back})` }}>
            <div>{props.icon}</div>
            <h1>{props.title}</h1>
         </div>
           
        </>
    )
}

export default Card1;