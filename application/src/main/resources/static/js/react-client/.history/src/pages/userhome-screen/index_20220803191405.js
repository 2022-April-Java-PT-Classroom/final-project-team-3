import React from 'react';
import style from './style.module.scss';
function UserScreen() {
  return (
    <div className={style.MainProfileDiv}>
        <div className={style.profileContainer}>
        <div className={style.topPortion}>
        <div className={style.userProfileBgImage}>
            <img src='' alt='' srcSet=''/>
        </div>
        <div className={}></div>
      </div>
      <div className={style.bottomPortion}>
        <div className={style.rightSide}></div>
        <div className={style.leftSide}></div>
      </div>
        </div>
    </div>
  );
}

export default UserScreen;