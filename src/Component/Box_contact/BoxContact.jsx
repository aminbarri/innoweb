import './boxcontact.css'

const BoxContact =(props)=>{
    return (
        <>
        
        <div className='box_msg  col m-0' style={{backgroundColor: props.color}}>
            <div className='iconbtm'>
                {props.children}
            </div>
            
            <h4>{props.title}</h4>
            <p className='px-2 text-center'>
                {props.info}
            </p>
        </div>
        </>
    );
}
export default BoxContact;