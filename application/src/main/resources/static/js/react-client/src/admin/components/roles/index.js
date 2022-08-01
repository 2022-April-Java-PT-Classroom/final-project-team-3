import React, { useState } from 'react';
import Axios from 'axios'; 
import style from './style.module.scss';

const Roles = ({roles}) =>{

    //const [rolesState, setRolesState] = useState(roles);

     const [roleState, setRoleState] = useState({
        roleName :"",
        description : ""
     });

     const xroleName = document.querySelector("#roleName"),
      xdescription = document.querySelector("#description"),
      xup = document.querySelector("#up"),
      xroleId = document.querySelector("#roleId"),
      xroleSubmit = document.querySelector("#roleSubmit");

    
    const handleReset =() => {
        
        document.querySelector("#roleName").value = ""; 
        document.querySelector("#description").value = "";
        document.querySelector("#up").value = "0";
        document.querySelector("#roleId").value = "0";
        document.querySelector("#roleSubmit").innerText = "Add Role";
    }
    const handlePreUpdate = (roleId, roleName, description) => {
        document.querySelector("#roleName").value = roleName;
        document.querySelector("#description").value = description;
        document.querySelector("#up").value = "up";
        document.querySelector("#roleId").value = roleId;
        xroleSubmit.innerText = "Update Role";
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const up = document.querySelector("#up").value,
        roleId = document.querySelector("#roleId").value,
        roleName = document.querySelector("#roleName").value,
        description = document.querySelector("#description").value;

        const roleData = {
            roleName: roleName,
            description : description
        }; 
        

       // alert(up + " / " + roleId);
        if(document.querySelector("#up").value=="0" && document.querySelector("#roleId").value=="0"){
            Axios.post('http://localhost:8080/api/role/add-role', roleData).then((response) => {
                console.log(response.status);
                console.log('DATA', response.data);
                setRoleState(response.data);
            });

            window.location.reload();
        } 
        if(document.querySelector("#up").value =="up" && document.querySelector("#roleId").value >=0){
           //const performRequest =
            Axios.put(`http://localhost:8080/api/role/${roleId}/update-role`, roleData).then((response) => {
                console.log('Update successful');
                console.log('DATA', response.data);

                setRoleState(response.data);
                
            });
            // var i=0;
            // const token = setInterval(performRequest, 1000) // Every 5 seconds?
            //     performRequest(); // Initial request
            //     return () => {
            //      // Don't forget to cleanup the interval when this effect is cleaned up.
            //     clearInterval(token)
            //     }
            window.location.reload();
        }

    };
    
    const handleDelete = (roleId, roleName) => {
        if(window.confirm("Delete " + roleName + " " + roleId +"?")){
            Axios.delete(`http://localhost:8080/api/role/${roleId}/delete-role`).then((response) => {
                console.log('Delete successful');
                console.log('DATA', response.data);
                setRoleState(response.data);
            });
            window.location.reload();
        }
    }


    

    return(
        <div>
            
            <div className={style.role}>
                <form onSubmit={handleSubmit}> 
                    <span id = "reset" onClick={() => handleReset()} >reset</span>
                    <input type="text" id ="roleName" name = "roleName"  placeholder="Enter a role name (required)" required/>
                    <textarea id = "description" name = "description"  placeholder="Enter the description" />
                    <input type="hidden" id ="up" name = "up"  value="0" />
                    <input type="hidden" id ="roleId" name = "roleId"  value="0" />
                    <button type = "submit" id = "roleSubmit">Add Role</button>
                </form>
            </div>
            
            <div> 
            { //loadingRole ? <h3>Loading ...</h3> :
                <>
                    <h3>Roles</h3>
                    <table>
                        <tr>
                            <th>Name</th><th>Description</th><th></th><th></th>
                        </tr>
                        {roles.map(role =>(
                            <tr key={role.id}>
                                <td>{role.roleName}</td>
                                <td>{role.description}</td>
                                <td><button onClick={() => handlePreUpdate(role.id, role.roleName, role.description)}>up</button></td>
                                <td><button onClick={() => handleDelete(role.id, role.roleName)}>x</button></td>
                            </tr>
                        ))}
                    </table>
                    
                </>   
             }
            </div>

            
        </div>

    );


}

export default Roles;