import React from 'react';
import {useEffect, useState} from 'react';
import Axios from 'Axios'; 

const AdminAuthScreen = () =>{

    const [loadingRole, setLoadingRole] = useState(true),
    const [role, setRole] = useState(null),
    const [loadingUser, setLoadingUser] = useState(true),
    const [user, setUser] = useState(ull);

    const [roleState, setRoleState] = useState({
        roleName : roleState.roleName,
        description : roleState.description
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setRoleState({
            ...roleState,
            [e.target.name]: value
        });
    }

    useEffect(() => {
        const fetchData = async () =>{
            const result = await Axios('http://localhost:8080/api/role');
            setRole(result.data);
        }

        if(role){
            setLoadingRole(false);
        }

        const timer = setTimeout(() => {
            !role && fetchData(); 
        }, 1000);

        return () => clearTimeout(timer);

    },[role]);

    return(
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" name = "roleName" onChange={handleChange} placeholder="Enter a role name"/>
                    <textarea name = "description" onChange={handleChange} placeholder="Enter the description" />
                    <button type = "submit" >Add Role</button>
                </form>
            </div>
            <h3>Roles</h3>
            <div> 
                <table>
                    {roleState.map(role =>(
                        <tr>
                            <td>{role.roleName}</td>
                            <td>{role.description}</td>
                            <td><button onClick={() => handleUpdate(role.id)}>up</button></td>
                            <td><button onClick={() => handleDelete(role.id)}>x</button></td>
                        </tr>
                    ))}
                </table>
            </div>


        </div>

    );


}

export default AdminAuthScreen;