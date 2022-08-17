import React from "react";
import style from './style.module.scss';

const NeedLogin = () => {
    let display = true; 
    if(localStorage.getItem("token")==""){
    window.location.replace("/login"); display = false; }
    

    return (
        <div className={style.needlogin}>
            
        </div>
    )
}

export default NeedLogin;