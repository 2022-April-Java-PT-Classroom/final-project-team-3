import React, {useEffect, useState} from 'react';

import Axios from 'axios';

//import { useState } from 'react';

const Login = () => {
    const [userStates, setUserState] = useState({ email:"",passwoerd:""});

     const handleSubmit = (e) => {
        e.preventDefault();

        const xemail = document.querySelector("#email") ,
        xpassword = document.querySelector("#password") ;
        const userData = {
            
            email: xemail.value,
            password: xpassword.value,
    
        }; 
        
        alert(xemail.value + " " + xpassword.value);
       
            Axios.post('http://localhost:8080/api/user/login', userData).then((response) => {
                console.log(response.status);
                console.log('DATA', response.data);
                setUserState(response.data);
                alert(response.data);
            });
        
    
        
     
    };

   
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" id="email" name ="email"  placeholder='Enter your email' required/>
                <input type="password" name="password" id="password" placeholder="Enter password"required/>
            
            <button type="submit"> Submit</button>    
            </form>
            
        </div>
     
    );
}

export default Login;