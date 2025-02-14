import './card1.css'
import back from '../../assets/desk.jpg';


const Card1 =(props)=>{


    return (
        <>
         
        <div className='card_body col d-flex flex-column justify-content-evenly' style={{backgroundImage:`url(${props.background})` }}>
            <div>{props.children}</div> 
            <h1>{props.title}</h1>
         </div>
           
        </>
    )
}

export default Card1;