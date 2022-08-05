import React from 'react';
import style from './style.module.scss';

const Footer = () => {
    return (
        <div className={style.footer_wrapper}>
            <div className={style.footer}>
                <small className={style.small}> &copy; wcci 2022</small>
            </div>
        </div>
    )
}

export default Footer;