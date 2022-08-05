import React from 'react';
import { NavLink } from "react-router-dom";
import style from './style.module.scss';

const Footer = () => {
    return (
        <div className={style.footer_wrapper}>
            <div className={style.footer}>
                <small className={style.small}> &copy; wcci 2022</small>
                <div>
                    <ul className={style.navList}>
                    <NavLink to={'/faq'}>FAQ</NavLink>
                <NavLink to={'/review'}>Review</NavLink>
                <NavLink to={'/article'}>📖 Article</NavLink>
                <NavLink to={'/events'}>Events</NavLink></ul>
                </div>
                
            </div>
            
        </div>
    )
}

export default Footer;