import React from 'react'
import style from './style.module.scss';

function UserInfo() {
  return (
    <div className={style.mainUserInfoContainer}>
      <h4>UserInfo</h4>
      <hr className={style.hrInfo}>
        <div className={info}></div>
      </hr>
      </div>
  )
}

export default UserInfo