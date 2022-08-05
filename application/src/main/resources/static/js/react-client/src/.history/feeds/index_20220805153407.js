import React from 'react'
import style from './style.module.scss';
function Feeds() {
  return (
    <div className={style.mainFeedsContainer}>
        <div className={style.feedInputContainer}>
            <div className={style.avatarContainer}></div>
            <div className={style.inputContainer}></div>
        </div>
        <div className={style.feedPostButton}></div>
    </div>
  )
}

export default Feeds