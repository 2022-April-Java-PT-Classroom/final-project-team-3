import React from 'react';
import emailicon from '../../assets/footerimgs/EmailIcon.png';
import helpicon from '../../assets/footerimgs/HelpIcon.png';
import style from './style.module.scss';
import twittericon from '../../assets/footerimgs/TwitterIcon.png';

const Footer = () => {

   if(localStorage.getItem("token")!=""){
 
        const resObj = JSON.parse(localStorage.getItem("token")); 

    
            const lance = async () => {
           // document.querySelector("#formLogin").style.display = "none"; 
           //document.querySelector("#logout").style.display = "block"; 
            const  xaccount = document.querySelector("#account") ; 
            xaccount.style.fontSize = "12px";
            xaccount.style.fontWeight = "600";
            xaccount.textContent = "Hi, "+resObj.firstName; 
        }
        const timer = setTimeout(() =>{lance();},20);
    }

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
            
        </div>
    )
}

export default Footer;