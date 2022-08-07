import React, {useState} from 'react';

import Feeds from '../../allpost';
import {Avatar} from '@mui/material';
import {Button} from '@mui/material';
import {IconButton}from '@mui/material';
import Post from '../post';
import style from './style.module.scss';

// import AddPhotoIcon from '@mui/icons-material/AddAPhoto';






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
            <Post/>
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
        <div className={style.iconButtonsActions}>
          
          <div className={style.iconButtonAction}>
            <label for="imageFile">
              <input type="file" id="imageFile" accept="image/*" hidden='true'/>
            <IconButton id='addAPhotoIc' component="span">
            {/* <AddPhotoIcon /> */}
            </IconButton>
            </label>
            <h5 className={style.actionButtonText}>Upload Photo</h5>
          </div>
        </div>
       </div> 
       <div className={style.bottomContainer}>
        <h3 className={style.usersPost}>User Posts</h3>
        
        <div className={style.headPosition}>
            <div className={style.userInfoPortion}>
                <div className={style.userAvatar}><Avatar src=""></Avatar></div>
                <div className={style.userInfoDetail}>
                    <div className={style.userName}>User Name</div>
                    <div className={style.postCreationDate}> # days ago</div>
                </div>
            </div>
            <div className={style.postDescripPortion}></div>
        </div>
        <div className={style.bodyPosition}>
          <img src='' alt=''></img>
        </div>
        <hr className={style.hrPost}/>
        <div className={style.footerPosition}>
          <div className={style.comment}>Comments</div>
        </div>
       </div>
    </div>
    
  )
}

export default Feeds;