import React, {useState} from 'react';

import {Avatar} from '@mui/material';
import {Button} from '@mui/material';
import style from './style.module.scss';

function Feeds() {
const [UserPostDescrip, setUserPostDescrip ]= useState("");
const handleButtonClick=(e)=>{
  e.preventDefault();
}
  return (
    <div className={style.mainFeedsContainer}>
        <div className={style.topContainer}>
        <div className={style.feedInputContainer}>
            <div className={style.avatarContainer}><Avatar src=""></Avatar></div>
            <div className={style.inputContainer}>
                <input className={style.postDesc} placeholder='Food to post to the community'
                onChange={(e) =>{setUserPostDescrip(e.target.value)}}
                />
                </div>  
        </div>
        <div className={style.feedPostButtonContainer}>
          <Button className={style.postBtn} onClick={handleButtonClick}>Post</Button>
        </div>
        <hr className={style.hrId}/>
        <div className={style.iconButtons_actions}>
          <div className={style.iconsButtonAction}>
            
          </div>
          <div className={style.iconsButtonAction}>
            
          </div>
          <div className={style.iconsButtonAction}></div>
        </div>
       </div> 
       <div className={style.bottomContainer}>
        
       </div>
    </div>
    
  )
}

export default Feeds