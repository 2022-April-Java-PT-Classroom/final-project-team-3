import React, {createElement, useEffect, useState} from 'react';

import Axios from 'axios';
import style from './style.module.scss';

//import { useState } from 'react';

const Login = () => {

     const [loading, setLoading] = useState(true);
    
   
    
     if(localStorage.getItem("token")!=""){
 
        const resObj = JSON.parse(localStorage.getItem("token")); 

    
            const lance = async () => { 
            document.querySelector("#formLogin").style.display = "none"; 
            document.querySelector("#logout").style.display = "block";
            const  xaccount = document.querySelector("#account") ; //alert(2);
            xaccount.style.fontSize = "12px";
            xaccount.style.fontWeight = "600";
            xaccount.textContent = "Hi, "+resObj.firstName; 
        }
        const timer = setTimeout(() =>{lance();},20);
    }


    const handleLogout = ()=>{
        //localStorage.removeItem("token"); alert(1);
        localStorage.setItem("token","");
        document.querySelector("#logout").style.display = "none";
        //document.querySelector("#formLogin").style.display = "block";
        document.querySelector("#formLogin").style.display = "flex";
        document.querySelector("#account").textContent = "Login";
        document.querySelector("#account").style.fontSize = "";
        document.querySelector("#account").style.fontWeight = "";
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const xemail = document.querySelector("#email") ,
        xpassword = document.querySelector("#password") ,
        xaccount = document.querySelector("#account") ;
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
                
                xaccount.style.fontSize = "12px";
                xaccount.style.fontWeight = "600";
                xaccount.textContent = "Hi, "+resObj.firstName; 

                xemail.value = "";
                xpassword.value = ""; 

                document.querySelector("#formLogin").style.display = "none";
                document.querySelector("#logout").style.display = "block";

                console.log(JSON.parse(resObj));
                //window.location.replace("/");
            }
            }).catch(function (err) {
                console.log("Incorrect email or password " + err.message);
                //console.log("Incorrect email or password ");
              }); 
        
    
        
     
    }
  
   
    return (
        <div>
            { //loading ? <h3>Loading ...</h3> :
            <>
                <button onClick={() => handleLogout()} id="logout" className={style.logout}>Logout</button>
                <form onSubmit={handleSubmit} id="formLogin">
                < className="mb-3">
                    <input type="email" id="email" name ="email"  placeholder='Enter your email' required/>
                    <input type="password" name="password" id="password" placeholder="Enter password"required/>
                <
                <button type="submit"> Submit</button> <div>Don't have a account, please <a href="/signup">signup</a></div>   
                </form>
            </>   
            }
        </div>
     
    );
   
   
}

export default Login;