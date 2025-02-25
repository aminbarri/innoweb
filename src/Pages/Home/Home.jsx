import './home.css';
import  { useState, useEffect } from "react";

import {Header ,Aboutus , Mission , Choose,Messagesection,Footer} from '../../Sections/index'; 
import {Loading } from '../../Component/index';



const Home=(props)=>{
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
        setLoading(false); 
        }, 2000);
    }, []);
    
    return(
        <>
        {loading ? (
        <Loading />
        ) : (<>
            <Header />
            <Aboutus />
            <Mission />
            <Choose />
            <Messagesection />
            <Footer />
        </>
            
          )}
        </>
    );

}
export default Home;