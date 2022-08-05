import {Avatar} from '@mui/material';
import React { useStatefrom 'react'
import style from './style.module.scss';
function Feeds() {

  return (
    <div className={style.mainFeedsContainer}>
        <div className={style.topContainer}>
        <div className={style.feedInputContainer}>
            <div className={style.avatarContainer}><Avatar></Avatar></div>
            <div className={style.inputContainer}>
                <input placeholder='Food to post to the community'></input>
                </div>  
        </div>
        <div className={style.feedPostButtonContainer}></div>
       </div> 
       <div className={style.bottomContainer}>
        
       </div>
    </div>
    
  )
}

export default Feeds