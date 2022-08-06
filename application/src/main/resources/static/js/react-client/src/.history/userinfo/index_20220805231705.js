import React from 'react'
import style from './style.module.scss';

function UserInfo() {
  return (
    <div className={style.mainUserInfoContainer}>
      <h4>UserInfo</h4>
      <hr className={style.hrInfo}>
        <div className={style.infoContainer}>
          <div className={style.city}>
            <h6>City: </h6>
          </div>
          <div className={style.from}>
            <h6 ></h6>
          </div>
        </div>
      </hr>
      </div>
  )
}

export default UserInfo