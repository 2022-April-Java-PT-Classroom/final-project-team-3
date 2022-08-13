import React from 'react';
import emailicon from '../../assets/footerimgs/EmailIcon.png';
import helpicon from '../../assets/footerimgs/HelpIcon.png';
import style from './style.module.scss';
import Axios from 'axios';

import twittericon from '../../assets/footerimgs/TwitterIcon.png';
import SetToken from '../set-token';

const Footer = () => {

    return (
        <div className={style.footer}>
            <div className={style.firstContainter}>
                    <a href="mailto:communitywcci@gmail.com?body=" className={style.link}><img className={style.contacticons} src={emailicon} alt="Email Icon" />Email us</a>
                    
                    <a href='{#contact}' className={style.link}><img className={style.contacticons} src={helpicon} alt="Help Icon" />Contact Us</a>
                    
                    <a href="https://twitter.com/CommunityWcci" className={style.link}><img className={style.contacticons} src={twittericon} alt="Twitter Icon" />Twitter</a>
            </div>
            
            <div className={style.secondContainer}>
            <small className={style.small}> &copy; wcci 2022</small>
            </div>
            <SetToken/>
        </div>
    )
}

export default Footer;