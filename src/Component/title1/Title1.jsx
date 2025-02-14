import './title1.css'

const Title1 =(props)=>{


    return (
        <>
            <div className='py-5 aboutus_title'>
             <h1 style={{ color: props.color }}>{props.title}</h1>
            </div>
        </>
    )
}

export default Title1;