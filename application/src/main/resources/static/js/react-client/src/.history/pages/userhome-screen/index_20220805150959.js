import Feeds from 'feeds';
import React from 'react';
import prfBg from '../../assets/profile-screen/prfBackground.jpg';
import style from './style.module.scss';
function UserScreen() {
  return (
    <div className={style.MainProfileDiv}>
        <div className={style.profileContainer}>
        <div className={style.topPortion}>
        <div className={style.userProfileBgImage}>
            {/* <img className={style.prfBgImg} src={prfBg} alt='Background Image' srcSet=''/> */}
        </div>
        <div className={style.userProfileImage}>
        <img className={style.prfImg} src='' alt='' srcSet=''/>
        </div>
        <div className={style.userNam}>
            Username
        </div>
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
