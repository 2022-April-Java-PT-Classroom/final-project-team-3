import React from 'react';
import style from './style.module.scss';

const Footer = () => {
    return (
        <div className={style.footer_wrapper}>
            <div className={style.footer}>
                <small className={style.small}> &copy; wcci 2022</small>
                <ul className={style.socialList}>
                    <li>GitHub</li>
                    <li>LinkedIn</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;