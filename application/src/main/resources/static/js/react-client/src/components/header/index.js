import { NavLink } from "react-router-dom";
import React from "react";
import logo from '../../assets/logo/Community.png';
import style from './style.module.scss';

const Header = () => {

    return (
        <div>
            <div className={style.header} >
                <ul className={style.navList}>
                <img className={style.image} src={logo} alt='Community Logo' /> 
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'/userhome'}>UserHome</NavLink>
                    <NavLink to={'/about'}>About</NavLink>
                    <NavLink to={'/about-developers'}>Team</NavLink>
                    <NavLink to={'/about-company'}>Who We Are</NavLink>
                    <NavLink to={'/contact'}>Contact</NavLink>
                    <NavLink to={'/article'}>Article</NavLink>
                    <NavLink to={'/events'}>Events</NavLink>
                    <NavLink to={'/faq'}>FAQ</NavLink>
                    <NavLink to={'/findfood'}>Find Food</NavLink>
                    <NavLink to={'/login'}>Login</NavLink>
                    <NavLink to={'/profile'}>Profile</NavLink>
                    <NavLink to={'/review'}>Review</NavLink>
                    <NavLink to={'/signup'}>Sign Up</NavLink>
                </ul>
            </div>
        </div>
    )
}

export default Header;