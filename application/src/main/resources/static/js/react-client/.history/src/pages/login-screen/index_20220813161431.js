import React, {createElement, useEffect, useState} from 'react';

import AllFoodPosted from '../../components/all-food-posted';
import Axios from 'axios';
import style from './style.module.scss';

//import { useState } from 'react';

const Login = () => {
  
     const [loading, setLoading] = useState(true);
    //
     var chiefId = 0; 
     
    // if(!localStorage.getItem("token")) localStorage.setItem("token","");
    if(localStorage.getItem("token")!=""){
 
        const resObj = JSON.parse(localStorage.getItem("token")); 
        chiefId = resObj.userId; 
        
            const lance = async () => { 
            document.querySelector("#formLogin").style.display = "none"; 
            document.querySelector("#logout").style.display = "block";
            const  xlogin = document.querySelector("#login") ; 
            xlogin.style.fontSize = "12px";
            xlogin.style.fontWeight = "600";
            xlogin.textContent = "Hi, "+resObj.firstName; 
        }
        const timer = setTimeout(() =>{lance();},20);
    } else 
    setTimeout(() =>{document.querySelector("#operatingFood").style.display = "none";},20); //document.querySelector("#operatingFood").setAttribute("style","display:none");

    const handleLogout = ()=>{
        //localStorage.removeItem("token"); alert(1);
        localStorage.setItem("token","");
        document.querySelector("#logout").style.display = "none";
        //document.querySelector("#formLogin").style.display = "block";
        document.querySelector("#formLogin").style.display = "flex";
        document.querySelector("#login").textContent = "Login";
        document.querySelector("#login").style.fontSize = "";
        document.querySelector("#login").style.fontWeight = "";
        localStorage.setItem("roleId","");
        document.querySelector("#operatingFood").style.display = "none";

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const xemail = document.querySelector("#email") ,
        xpassword = document.querySelector("#password") ,
        xlogin = document.querySelector("#login") ;
        const userData = {
            
            email: xemail.value,
            password: xpassword.value,
    
        }; 
        
            
            Axios.post('http://localhost:8080/api/user/login', userData).then((response) => {
                console.log("Status",response.status); 
                console.log('DATA', response.data); 
                //setUserState(response.data);
               if(response.data.email){
                    const tokenObj = {
                        firstName: response.data.firstName,
                        lastName: response.data.lastName,
                        email: response.data.email,
                        userId: response.data.userId,
                        roles: response.data.roles
                    }; 
                localStorage.setItem("token", JSON.stringify(tokenObj)); 
                
                const resObj = JSON.parse(localStorage.getItem("token"));
                
                xlogin.style.fontSize = "12px";
                xlogin.style.fontWeight = "600";
                xlogin.textContent = "Hi, "+resObj.firstName; 
                
                let role ="";
                for(let i=0; i < response.data.roles.length; i++){if(i>0)role +=","; role +=response.data.roles[i].id; }
                localStorage.setItem("roleId", role); 
               
                xemail.value = "";
                xpassword.value = "";   

                document.querySelector("#formLogin").style.display = "none";
                document.querySelector("#logout").style.display = "block";
               document.querySelector("#operatingFood").style.display = "block"; 

                console.log(JSON.parse(resObj));
                //window.location.replace("/");
                //setTimeout(window.location.reload(),1000);
            }
            }).catch(function (err) {
                console.log("Incorrect email or password " + err.message);
                //console.log("Incorrect email or password ");
              }); 
   
    }
///////////////////////////////////////////////////////


  
   
    return (
        <div className={style.loginform}>
          { //loading ? <h3>Loading ...</h3> :
            <>
            <form  className={style.loginform} onSubmit={handleSubmit} id="formLogin">
            <h1> Login</h1>
                <button onClick={() => handleLogout()} id="logout" className={style.logout}>Logout</button>
                <div className={style.content}>
                    <div className={style.inputfield}>
                    <input type="email" id="email" name ="email"  placeholder='Enter your email' required/>
                    </div>
                    <div className={style.inputfield}>
                    
                    <input type="password" name="password" id="password" placeholder="Enter password"required/>
                    </div>
                </div>
                <button type="submit"> Submit</button> <div>Don't have a account, please <a href="/signup">signup</a></div>   
                </form>
            </>   
            }

            <AllFoodPosted />

        </div>
     
    );
   
   
}

export default Login;