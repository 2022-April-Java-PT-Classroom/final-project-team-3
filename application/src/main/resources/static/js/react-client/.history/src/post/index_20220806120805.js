import {Avatar} from '@mui/material';
import React from 'react';
import style from './style.module.scss';
function Post() {
  return (
    <div className={style.mainPostContainer}>
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
          {/* <img src='' alt=''></img> */}
        </div>
        <hr className={style.hrPost}/>
        <div className={style.footerPosition}>
          <div className={style}></div>
        </div>
    </div>
  );
}

export default Post;
