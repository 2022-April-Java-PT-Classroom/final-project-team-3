import React, {useEffect, useState} from 'react';
import Axios from 'axios'; 
import style from './style.module.scss';

const AdminRoleScreen = () =>{

    
    const [roleState, setRoleState] = useState({
        roleName :"",
        description : ""
    });

    
    const handleReset =() => {
        document.querySelector("#roleName").value = "";
        document.querySelector("#description").value = "";
        document.querySelector("#up").value = "0";
        document.querySelector("#roleId").value = "0";
        document.querySelector("#roleSubmit").innerText = "Add Role";
    }
    const handlePreUpdate = (roleId, roneName, description) => {
        document.querySelector("#roleName").value = roneName;
        document.querySelector("#description").value = description;
        document.querySelector("#up").value = "up";
        document.querySelector("#roleId").value = roleId;
        document.querySelector("#roleSubmit").innerText = "Update Role";
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
        if(up=="0" && roleId=="0"){
            Axios.post('http://localhost:8080/api/role/add-role', roleData).then((response) => {
                console.log(response.status);
                console.log('DATA', response.data);
                setRoleState(response.data);
            });

            window.location.reload();
        } 
        if(up=="up" && roleId>=0){
            Axios.put(`http://localhost:8080/api/role/${roleId}/update-role`, roleData).then((response) => {
                console.log('Update successful');
                console.log('DATA', response.data);

                setRoleState(response.data);
            });
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
        }, 2000);

        return () => clearTimeout(timer);

    },[roles]);


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
            { loadingRole ? <h3>Loading ...</h3> :
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

export default AdminRoleScreen;