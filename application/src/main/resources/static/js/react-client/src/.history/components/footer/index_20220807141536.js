import React from 'react';
import style from './style.module.scss';

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
        <div className={style.footer_wrapper}>
            <div className={style.footer}>
                <small className={style.small}> &copy; wcci 2022</small>
            </div>
        </div>
    )
}

export default Footer;