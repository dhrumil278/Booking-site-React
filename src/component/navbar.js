import Logo from '../Static/Images/travel-logo.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import './CSS/navbar.css';
import { useState } from 'react';

function Navbar() {

    const [isShow, setIsShow] = useState(false);

    return ( 
        <>
        <div className='nav-section'>
            <div className="logo-section">
                <div className="logo">
                    <img className='logo-img' src={Logo} alt="error" />
                </div>
                <div className="logo-name">
                    <p className="company-name">TripGuide</p>
                </div>
            </div>
            <div className="right-logo-section">
                <div className="locatioon">
                    <p className="l-name">IND</p>
                    <div className="ind-flag"></div>
                </div>
                <div className="notification">
                    <FontAwesomeIcon icon={regular('bell')} fade />
                </div>
                <div className="vertical-line"></div>
                <div className="login">
                    <div className="login-profile"></div>
                    <div className="login-name">
                        <div className='btn-login' onClick={(e)=> setIsShow(!isShow) }>Dhrumil
                        { isShow ? <FontAwesomeIcon className="passenger-icon" icon={solid('angle-up')} /> : <FontAwesomeIcon className="passenger-icon" icon={solid('angle-down')} /> }
                        </div>
                        { isShow && (
                            <div className="profile-drop-down-content" >
                                <div className="profile-drop-down-items">
                                    <span className='profile-drop-down-item-icon'><FontAwesomeIcon icon={solid('user')} /></span>
                                    <p className='profile-drop-down-item-p'>Profile</p>
                                </div>
                                <div className="profile-drop-down-items">
                                    <span className='profile-drop-down-item-icon'><FontAwesomeIcon icon={solid('user')} /></span>
                                    <p className='profile-drop-down-item-p'>My Account</p>
                                </div>
                                <hr />
                                <div className="profile-drop-down-items">
                                    <span className='profile-drop-down-item-icon'><FontAwesomeIcon icon={solid('gear')} /></span>
                                    <p className='profile-drop-down-item-p'>setting</p>
                                </div>
                                <div className="profile-drop-down-items">
                                    <span className='profile-drop-down-item-icon'><FontAwesomeIcon icon={solid('arrow-right-from-bracket')} /></span>
                                    <p className='profile-drop-down-item-p'>log out</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}

export default Navbar;