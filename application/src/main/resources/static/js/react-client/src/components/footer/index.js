import React from 'react';
import style from './style.module.scss';
import Axios from 'axios';


const Footer = () => {

    var chiefId = 0;
 
   if(localStorage.getItem("token")!=""){
 
    const resObj = JSON.parse(localStorage.getItem("token")); 

    chiefId= resObj.userId; //console.log(resObj);
    
            const lance = async () => {
            const  xaccount = document.querySelector("#account") ; 
            document.querySelector("#userHomeName").textContent = resObj.firstName;
            document.querySelector("#userHomeName").style.color = "#6D8021";
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