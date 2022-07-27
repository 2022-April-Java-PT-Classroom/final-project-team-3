import React, {useEffect, useState} from 'react';
import Axios from 'axios'; 
import style from './style.module.scss';


const AdminUserScreen = () => {
    
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
        xuserSubmit =  document.querySelector("#userSubmit") ;

        

    const handleReset =() => {
        xfirstName.value = "";
        xlastName.value = "";
        xemail.value = "";
        xphone.value = "";
        xavatar.value = "";
        xdescription.value = "";
        xpassword.value = "";
       
        xup.value = "0";
        xuserId.value = "";
        xuserSubmit.innerText = "Add User";
    }
    const handlePreUpdate = (userId, firstName, lastName, email, 
        phone, avatar, description, password, roles) => {

        xfirstName.value = firstName;
        xlastName.value = lastName;
        xemail.value = email;
        xphone.value = phone;
        xavatar.value = avatar;
        xdescription.value = description;
        xpassword.value = password;

        for (const o of xroleId.options) {
            o.selected = false;
        }
       
        //const select = document.querySelector('select')
        for (const o of xroleId.options) {
        for(const i of roles)
        if (i.id == o.value) {
            o.selected = true
        }
        }
        xup.value = "up";
        xuserId.value = userId;
        xuserSubmit.innerText = "Update User";
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        var z =""; var i=0;
        for (const o of xroleId.options) {
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
            password: xpassword.value,
            roleId: xroleIds
        }; 
        

        //alert(xroleIds);
        if(xup.value=="0" && xuserId.value=="0"){
            Axios.post('http://localhost:8080/api/user/add-user', userData).then((response) => {
                console.log(response.status);
                console.log('DATA', response.data);
                setUserState(response.data);
            });

            window.location.reload();
        } 
        if(xup.value=="up" && xuserId.value>=0){
            Axios.put(`http://localhost:8080/api/user/${xuserId.value}/update-user`, userData).then((response) => {
                console.log('Update successful');
                console.log('DATA', response.data);

                setUserState(response.data);
            });
            window.location.reload();
        }

    };
    
    const handleDelete = (userId, firstName, lastName) => {
        if(window.confirm("Delete " + firstName + " " + lastName + " " + userId +"?")){
            Axios.delete(`http://localhost:8080/api/user/${userId}/delete-user`).then((response) => {
                console.log('Delete successful');
                console.log('DATA', response.data);
                setUserState(response.data);
            });
            window.location.reload();
        }
    }

    const [loadingUser, setLoadingUser] = useState(true),
    [users, setUsers] = useState(null);

    useEffect(() => {
        const fetchData = async () =>{
            const result = await Axios('http://localhost:8080/api/user');
            setUsers(result.data);
        }

        if(users){
            setLoadingUser(false);
        }

        const timer = setTimeout(() => {
            !users && fetchData(); 
        }, 2000);

        return () => clearTimeout(timer);

    },[users]);

    const [loadingRole, setLoadingRole] = useState(true),
    [roles, setRoles] = useState(null);

    useEffect(() => {
        const fetchData = async () =>{
            const result = await Axios('http://localhost:8080/api/role');
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
        <div>
            
            <div className={style.user}>
                <form onSubmit={handleSubmit}> 
                    <span id = "reset" onClick={() => handleReset()} >reset</span>
                    <input type="text" id ="firstName" name = "firstName"  placeholder="Enter first name (required)" required/>
                    <input type="text" id ="lastName" name = "lastName"  placeholder="Enter last name (required)" required/>
                    <input type="phone" id ="phone" name = "phone"  placeholder="Enter you phone number (required)" required/>
                    <input type="email" id ="email" name = "email"  placeholder="Enter your email (required)" required/>
                    <input type="password" id ="password" name = "password"  placeholder="Enter password (required)" required/>
                    <textarea id = "description" name = "description"  placeholder="Enter the description" />
                    <input type="text" id ="avatar" name = "avatar"  placeholder="Enter avatar URL" />
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
            
            <div> 
            { loadingUser ? <h3>Loading ...</h3> :
                <>
                    <h3>Users</h3>
                    <table>
                        <tr>
                            <th>First Name</th><th>Last Name</th>
                            <th>Email</th><th>Phone</th>
                            <th>avatar</th><th>Description</th>
                            <th>Password</th><th>Role</th><th></th><th></th>
                        </tr>
                        {users.map(user =>(
                            <tr key={user.id}>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td ><img src={user.avatar} width="50" title={user.avatar} /></td>
                                <td className={style.fixLenght}>{user.description}</td>
                                <td className={style.fixLenght}>{user.password}</td>
                                <td>
                                {user.roles.map(role =>(
                                    <li key={role.id}>{role.roleName}</li>
                                 ))}
                                </td>
                                <td><button onClick={() => handlePreUpdate(user.id, user.firstName, 
                                user.lastName, user.email, user.phone, user.avatar, user.description, user.password, user.roles)}>up</button></td>
                                <td><button onClick={() => handleDelete(user.id, user.firstName, user.lastName)}>x</button></td>
                            </tr>
                        ))}
                    </table>
                    
                </>   
             }
            </div>

            
        </div>

    );


    
}

export default AdminUserScreen;