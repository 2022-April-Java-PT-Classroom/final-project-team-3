import React from "react";
import style from './style.module.scss';
 
const Popup = props => {
  return (
    <div className={style.popupBox}>
      <div className={style.box}>
        <span className={style.closeIcon} onClick={props.handleClose}>x</span>
        {props.content}
      </div>
    </div>
  );
};
 
export default Popup;