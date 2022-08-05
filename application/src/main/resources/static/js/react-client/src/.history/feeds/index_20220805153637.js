import React from 'react'
import style from './style.module.scss';
function Feeds() {
  return (
    <div className={style.mainFeedsContainer}>
        <div className={style.topContainer}>
        <div className={style.feedInputContainer}>
            <div className={style.avatarContainer}></div>
            <div className={style.inputContainer}></div>  
        </div>
        <div className={style.feedPostButtonContainer}></div>
       </div> 
       <div className={style.bottom}></div>
    </div>
    
  )
}

export default Feeds