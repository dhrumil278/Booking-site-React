import {useNavigate} from 'react-router';
import Navbar from './navbar';
import './CSS/thankyou.css';

function Thankyou(){

    const navigate = useNavigate();
    const handleGoToHome = ()=>{
        navigate('/');
    }
   

    return(
        <>
            <Navbar />
            <div className="thanksDiv">
                <div className="thanksContent">
                    <p className="thankYou">Your Booking in Confirm</p>
                    <p className="goToHome" onClick={handleGoToHome}> Home</p>
                </div>
            </div>
        </>
    );
}
export default Thankyou ; 