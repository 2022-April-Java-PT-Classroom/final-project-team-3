import React, {useEffect, useState} from 'react';

import {Avatar} from '@mui/material';
import Axios from 'axios';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import style from './style.module.scss';

const SignUp = () => {
    
    const [userState, setUserState] = useState({
        firstName :"",
        lastName : "",
        email : "",
        password: "",
        phone : "",
        avatar : "",
        description : "",
        address : ""
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setUserState({
            ...userState,
            [e.target.name]: value
        });
    };

    const xup = document.querySelector("#up"),
        xuserId = document.querySelector("#userId"),
        xfirstName = document.querySelector("#firstName"),
        xlastName = document.querySelector("#lastName") ,
        xemail = document.querySelector("#email") ,
        xphone = document.querySelector("#phone") ,
        xavatar = document.querySelector("#avatar") ,
        xdescription = document.querySelector("#description") ,
        xpassword = document.querySelector("#password") ,
        xroleId = document.querySelector("#roleId") ,
        xaddress = document.querySelector("#address") ,
        xuserSubmit =  document.querySelector("#userSubmit") ;

        

    const handleReset =() => {
       // var z =""; var i=0;
        xfirstName.value = "";
        xlastName.value = "";
        xemail.value = "";
        xphone.value = "";
        xavatar.value = "";
        xdescription.value = "";
        xaddress.value = "";
        xpassword.value = "";
       
        xup.value = "0";
        xuserId.value = "0";
        xuserSubmit.innerText = "Add User"; 

        for (const o of document.querySelector("#roleId").options) {
            o.selected = false; //alert("Clean");
        }
    }



    const handleSubmit = (e) => {
        e.preventDefault();  //console.log("activate user signup");      
        var z =""; var i=0;
        for (const o of document.querySelector("#roleId").options) {
        if (o.selected == true) 
        {
            if(i>0) z+=",";
          z +=o.value;
          i++;
        } 
      }  
      const xroleIds = z;
        const userData = {
            firstName: xfirstName.value,
            lastName: xlastName.value,
            email: xemail.value,
            phone:  xphone.value,
            avatar: xavatar.value,
            description : xdescription.value,
            address : xaddress.value,
            password: xpassword.value,
            roleId: xroleIds
        }; 

         //alert("Activate user signup?");
        
        //alert(xroleIds);
        //if(xup.value=="0" && xuserId.value=="0"){  
            Axios.post('http://localhost:8080/api/user/signup', userData).then((response) => {
                console.log(response.status); 
                console.log('DATA', response.data);
                setUserState(response.data);
                handleReset();
                document.querySelector("#resultSignup").innerHTML = "Thank you! You signed up " + response.data + "</br>Wait to be approve";
            });

           // window.location.reload();
       // } 
        
    };
    
    

    const [loadingRole, setLoadingRole] = useState(true),
    [roles, setRoles] = useState(null);

    useEffect(() => {
        const fetchData = async () =>{
            const result = await Axios('http://localhost:8080/api/role/no-admin');
            setRoles(result.data);
        }

        if(roles){
            setLoadingRole(false);
        }

        const timer = setTimeout(() => {
            !roles && fetchData(); 
        }, 1000);

        return () => clearTimeout(timer);

    },[roles]);



    return(
            <div className={style.signupform}>
                <h3 id="resultSignup"></h3>
                <form className={style.signupform} onSubmit={handleSubmit}> 
                    <span id = "reset" onClick={() => handleReset()} title="reset">reset</span>
                    <Avatar className={style.lockicon}>
                    <LockOutlinedIcon />
                    </Avatar>
            <h1 className={style.signuptitle}>Sign up</h1>
            <div className={style.content}>
                    <input type="text" id ="firstName" name = "firstName"  placeholder="Enter your first name (required)" required/>
                    <input type="text" id ="lastName" name = "lastName"  placeholder="Enter your last name (required)" required/>
                    <input type="phone" id ="phone" name = "phone"  placeholder="Enter your phone number (required)" required/>
                    <input type="email" id ="email" name = "email"  placeholder="Enter your email (required)" required/>
                    <input type="password" id ="password" name = "password"  placeholder="Enter your password (required)" required/>
                    <textarea id = "address" name = "address"  placeholder="Enter your address" />
                    <textarea id = "description" name = "description"  placeholder="Enter the description" />
                    <input type="text" id ="avatar" name = "avatar"  placeholder="Enter your avatar URL" />
                    <input type="hidden" id ="up" name = "up"  value="0" />
                    <input type="hidden" id ="userId" name = "userId"  value="0" />
                    { loadingRole ? <h3>Loading ...</h3> :
                        <select id="roleId" name="roleId" multiple required>
                            <option disabled>Please Select Role (required)</option>
                        {roles.map(role =>(
                            <option key={role.id} value={role.id}>{role.roleName}</option>
                        ))}
                        </select>
                    }
                    <button type = "submit" id = "userSubmit">Add User</button>
                </form>
            </div>
            

    );


    
}

export default SignUp;