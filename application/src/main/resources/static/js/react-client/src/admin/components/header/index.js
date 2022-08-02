import { NavLink } from "react-router-dom";
import React from "react";
import logo from '../../assets/logo/CommunityLogo.png';
import style from './style.module.scss';

const Header = () => {

    return (
        <div className={style.header}>
            <ul className={style.navList}>
            <NavLink to={'/admin'}><img className={style.image} src={logo} alt='Community Logo' /></NavLink>
                <NavLink to={'/admin'}>Home</NavLink>
                <NavLink to={'/admin/role'}>Role</NavLink>
                <NavLink to={'/admin/user'}>User</NavLink>
                <NavLink to={'/admin/picture'}>Picture</NavLink>
                <NavLink to={'/admin/content'}>Content</NavLink>
            </ul>
           
        </div>
    )
}

export default Header;