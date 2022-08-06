import { NavLink } from "react-router-dom";
import React from "react";
import logo from '../../assets/logo/CommunityLogo.png';
import style from './style.module.scss';

const Header = () => {
    
  
    const link = window.location.href;
    if(link.search("/admin")<0)
    return (
        <div className={style.header}>
            <div className={style.navList}>
                <img className={style.image} src={logo} alt='Community Logo' />
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/userhome'}>UserHome</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/contact'}>Contact</NavLink>
                <NavLink to={'/article'}>Article</NavLink>
                <NavLink to={'/events'}>Events</NavLink>
                <NavLink to={'/faq'}>FAQ</NavLink>
                <NavLink to={'/findfood'}>Find Food</NavLink>
                <NavLink to={'/profile'}>Profile</NavLink>
                <NavLink to={'/review'}>Review</NavLink>
                <NavLink to={'/login'} id="account">Login</NavLink>
                {/* <NavLink to={'/signup'}>Sign Up</NavLink> */}
            </div>
        </div>
    )
    else return (
        <div className={style.header}>
            <div className={style.navListAdmin}>
                <span>ADMIN</span>
                <NavLink to={'/admin/role'}>Role</NavLink>
                <NavLink to={'/admin/user'}>User</NavLink>
                <NavLink to={'/admin/picture'}>Picture</NavLink>
                <NavLink to={'/admin/content'}>Content</NavLink>
                <NavLink  id="account" to={'/login'}>Login</NavLink>
            </div>
        </div>
    ); 
}

export default Header;