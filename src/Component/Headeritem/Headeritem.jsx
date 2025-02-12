import './headeritem.css'

const Headeritem =(props)=>{


    return (
        <>
      
            <div className='header-item  d-flex flex-column align-items-start'>
                <h1 className='fw-lighter'>WE'RE TIMELINE </h1>
                <h2 className='fw-bolder'>A CREATIVE & DIGITAL </h2>
                <h3 className='fst-italic agency-text' >AGENCY </h3>
                <hr />
                <p>We help brands stand out from the crowd and succeed <br />
                    with our innovative ideas and top-notch services</p>
                <a className='btn-read px-4 py-1 fw-bolder'>read more</a>
            </div>
        </>
    )
}

export default Headeritem;