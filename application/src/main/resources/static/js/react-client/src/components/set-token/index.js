import React from 'react'
import style from './style.module.scss';

const SetToken = ()=> {
  var chiefId = 0;
  if(!localStorage.getItem("token")) localStorage.setItem("token","");
  if(localStorage.getItem("token")!=""){

   const resObj = JSON.parse(localStorage.getItem("token")); 

   chiefId= resObj.userId; //console.log(resObj);
   
           const lance = async () => {
           //const  xaccount = document.querySelector("#account") ; 
           
           setTimeout(()=>{document.querySelector("#login").style.fontSize = "12px";
           document.querySelector("#login").style.fontWeight = "600";
           document.querySelector("#login").textContent = "Hi, "+resObj.firstName;},20 );
          
       }
       const timer = setTimeout(() =>{lance();},20);
       
      
   }

  return (
    <div className={style.setToken}>
    </div>
  )
}

export default SetToken;