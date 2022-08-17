import React from "react";
import style from './style.module.scss';
import NeedLogin from "../../../components/need-login";

const AdminScreen = () => {   

    return (
        <div className={style.admin}>
         <NeedLogin/>   
           
        </div>
    )
}

export default AdminScreen;