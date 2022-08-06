import React from 'react';
import style from './style.module.scss';

function Post() {
  return (
    <div className={style.mainPostContainer}>
        <div className={style.headPosition}>
            <div className={style.userInfoPortion}>
                <div className={style.userAvatar}></div>
                <div className={style.userInfoDetail}>
                    <div className={style.userName}>User Name</div>
                    <div className={style.postCreationDate}> # days ago</div>
                </div>
            </div>
            <div className={style.postDescripPortion}></div>
        </div>
        <div className={style.bodyPosition}></div>
        <div className={style.footerPosition}></div>
    </div>
  );
}

export default Post;
