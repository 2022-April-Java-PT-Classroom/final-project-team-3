import React from 'react';
import style from './style.module.scss';
function UserScreen() {
  return (
    <div className={style.MainProfileDiv}>
        <div className={style.profile.container}>
        <div className={style.topPortion}>
        <div className={style.user-profile-bg-image}>
            <img src='' alt='' srcSet=''/>
        </div>
      </div>
      <div className={style.bottom-portion}>
        <div className={style.right-side}></div>
        <div className={style.left-side}></div>
      </div>
        </div>
    </div>
  );
}

export default UserScreen;
