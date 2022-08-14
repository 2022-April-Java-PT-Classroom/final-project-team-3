import { NavLink } from "react-router-dom";
import React from "react";
import Axios from 'axios';
import logo from '../../assets/logo/CommunityLogo.png';
import style from './style.module.scss';
import styleLink from '../../assets/css/style.css';

const Header = () => {
    var chiefId = 0; 
   //localStorage.removeItem("token"); localStorage.setItem("token","");
    if(localStorage.getItem("token")!=""){
  
     const resObj = JSON.parse(localStorage.getItem("token")); 
 
     chiefId= resObj.userId; //console.log(chiefId); 
    let roles, role=""; //set role to local storage
    Axios.get(`http://localhost:8080/api/user/${chiefId}`).then((response) => {
        console.log('DATA', response.data);
        console.log(response.data);
        roles = response.data.roles; console.log(roles);  //
       document.querySelector("#logoutTop").style.display = "block";
        for(let i=0; i < roles.length; i++){if(i>0)role +=","; role +=roles[i].id; }
        localStorage.setItem("roleId", role);  //alert(localStorage.getItem("roleId"));
    }).catch(function (err) {
        console.log("error " + err.message);
      }); 

    }
    const handleLogout = ()=>{ 
        document.querySelector("#logoutTop").style.display = "none";
        localStorage.setItem("token","");
        window.location.reload();

    }

    const link = window.location.href;
    if(link.search("/admin")<0)
    return (
        <div className={style.header}>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"></link>
            <link rel="stylesheet" href={styleLink}></link>
            <div className={style.navList}>
                <img className={style.image} src={logo} alt='Community Logo' />
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/userhome'}>UserHome</NavLink>
                <NavLink to={'/about-developers'}>Team</NavLink>
                <NavLink to={'/about-company'}>Who We Are</NavLink>
                <NavLink to={'/contact'}>Contact</NavLink>
                <NavLink to={'/article'}>Article</NavLink>
                <NavLink to={'/events'}>Events</NavLink>
                <NavLink to={'/faq'}>FAQ</NavLink>
                <NavLink to={'/findfood'}>Find Food</NavLink>
                {/* <NavLink to={'/profile'}>Profile</NavLink> */}
                <NavLink to={'/review'}>Review</NavLink>
                <NavLink to={'/login'} id="login">Login</NavLink>
                <i className="fa fa-sign-out fa-2x" onClick={()=>handleLogout()} id="logoutTop" ></i>
                {/* <NavLink to={'/signup'}>Sign Up</NavLink> */}
            </div>
        </div>
    )
    else return (
        <div className={style.header}>
            <div className={style.navListAdmin}>
                <span><b>ADMIN</b></span>
                <a href={'/'} style={{color:"#c30", fontWeight:"600"}}>Back to Home page</a>
                <NavLink to={'/admin/role'}>Role</NavLink>
                <NavLink to={'/admin/user'}>User</NavLink>
                <NavLink to={'/admin/picture'}>Picture</NavLink>
                <NavLink to={'/admin/content'}>Content</NavLink>
                <a  id="login" href={'/login'} style={{color:"#c30", fontWeight:"600"}}>Login</a>
            </div>
        </div>
    ); 
}

export default Header;