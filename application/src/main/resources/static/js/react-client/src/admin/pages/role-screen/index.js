import React, {useEffect, useState} from 'react';

import Axios from 'axios';
import Roles from '../../components/roles';
import style from './style.module.scss';
import NeedLogin from "../../../components/need-login";

const AdminRoleScreen = () =>{

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
            <NeedLogin/>
            <div >
                <section className={style.roleList}>
                    {loadingRole ? <h3>Loading ...</h3> :
                        <Roles roles={roles} />
                    }
                </section>
            </div>

            
        </div>

    );


}

export default AdminRoleScreen;