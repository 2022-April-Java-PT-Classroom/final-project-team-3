import React, {useEffect, useState} from 'react';
import Axios from 'axios'; 
import style from './style.module.scss';


const OneUser = () => {

    var userId = 0; 
    if(!localStorage.getItem("token")) localStorage.setItem("token","");
    if(localStorage.getItem("token")!=""){
 
        const resObj = JSON.parse(localStorage.getItem("token")); 
        userId = resObj.userId; 
        
    } else 
    setTimeout(() =>{document.querySelector("#dataOneUser").style.display = "none";},20);
    
    setTimeout(() =>{document.querySelector("#form").style.display = "none";},20);
    
    const [userState, setUserState] = useState({
        userName :"",
        description : ""
    });
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
        xaddress1 = document.querySelector("#address1") ,
        xuserSubmit =  document.querySelector("#userSubmit") ;

        

   
    const handlePreUpdate = (userId, firstName, lastName, email, 
        phone, avatar, address1, description, password, roles) => {
       document.querySelector("#form").style.display = "block";
        xfirstName.value = firstName;
        xlastName.value = lastName;
        xemail.value = email;
        xphone.value = phone;
        xavatar.value = avatar;
        xaddress1.value = address1;
        xdescription.value = description;
        xpassword.value = password;

       
        var z =""; var i=0;
        for(const r of roles)
         {
          if(i>0)z+=",";
          z +=r.id;
          i++;
        }
        xroleId.value = z;
        xup.value = "up";
        xuserId.value = userId;
        xuserSubmit.innerText = "Update User";
    }


    const handleSubmit = (e) => { 
        e.preventDefault();   console.log("activate admin add user");
        
      //const xroleIds = z;
        const userData = {
            firstName: xfirstName.value,
            lastName: xlastName.value,
            email: xemail.value,
            phone:  xphone.value,
            avatar: xavatar.value,
            address: xaddress1.value,
            description : xdescription.value,
            password: xpassword.value,
            roleId: xroleId.value
        }; 
        console.log(userData);

        if(xup.value=="up" && xuserId.value>=0){
            Axios.put(`http://localhost:8080/api/user/${xuserId.value}/update-user`, userData).then((response) => {
                console.log('Update successful');
                console.log('DATA', response.data);

                setUserState(response.data);
                window.location.reload();
            });
           
        }

    };
    
   
    const [loadingUser, setLoadingUser] = useState(true),
    [user, setUsers] = useState(null);
    
    
    useEffect(() => {
        const fetchData = async () =>{
            const result = await Axios(`http://localhost:8080/api/user/${userId}`);
            setUsers(result.data);
        }

        if(user){
            setLoadingUser(false);
        }

        const timer = setTimeout(() => {
            !user && fetchData(); 
        }, 1000);

        return () => clearTimeout(timer);

    },[user]);
    
   
    return(
        <div>
            <div id="dataOneUser">
            
            <div className={style.user}>
                <h3 id="resultStatus"></h3>
                <div id="form">
                <form onSubmit={handleSubmit}> 
                   
                    <input type="text" id ="firstName" name = "firstName"  placeholder="Enter first name (required)" required/>
                    <input type="text" id ="lastName" name = "lastName"  placeholder="Enter last name (required)" required/>
                    <input type="phone" id ="phone" name = "phone"  placeholder="Enter you phone number (required)" required/>
                    <input type="email" id ="email" name = "email"  placeholder="Enter your email (required)" required/>
                    <input type="password" id ="password" name = "password"  placeholder="Enter password (required)" required/>
                    <textarea id = "address1" name = "address1"  placeholder="Enter your address" ></textarea>
                    <textarea id = "description" name = "description"  placeholder="Enter the description"></textarea>
                    <input type="text" id ="avatar" name = "avatar"  placeholder="Enter avatar URL" />
                    <input type="hidden" id ="up" name = "up"  value="0" />
                    <input type="hidden" id ="userId" name = "userId"  value="0" />
                    <input type="hidden" id ="roleId" name = "roleId"  />
                    <button type = "submit" id = "userSubmit">Update</button>
                </form>
                </div>
            </div>
            
            <div> 
            { loadingUser ? <h3>Loading ...</h3> :
                <>
                   
                    <table>
                        
                        
                      
                            <tr key={user.id}>
                                <td>{user.firstName}</td>
                                {/* <td>{user.lastName}</td> */}
                                <td>{user.email}</td>
                                {/* <td>{user.phone}</td> */}
                                <td style={{width:"50px"}} ><img src={user.avatar} title={user.avatar} className={style.img}  /></td>
                                </tr>
                                <tr>
                                {/* <td className={style.fixLenght}>{user.description}</td>  */}
                                {/* <td className={style.fixLenght}>{user.password}</td> */}
                                <td>
                                {user.roles.map(role =>(
                                    <li key={role.id}>{role.roleName}</li>
                                 ))}
                                </td>
                                <td></td>
                                <td><button onClick={() => handlePreUpdate(user.id, user.firstName, 
                                user.lastName, user.email, user.phone, user.avatar, user.address1, user.description, user.password, user.roles)}>up</button></td>
                                
                            </tr>
                        
                    </table>
                    
                </>   
             }
            </div>

            </div>
        </div>

    );


    
}

export default OneUser;