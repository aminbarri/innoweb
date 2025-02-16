import './home.css';
import {Header ,Aboutus , Mission , Choose,Messagesection,Footer} from '../../Sections/index'; 
const Home=(props)=>{
    return(
        <>
            <Header />
            <Aboutus />
            <Mission />
            <Choose />
            <Messagesection />
            <Footer />
        </>
    );

}
export default Home;