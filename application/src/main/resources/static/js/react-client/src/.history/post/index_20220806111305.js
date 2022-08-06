import React from 'react';
import style from './style.module.scss';
function Post() {
  return (
    <div className={style.mainPostContainer}>
        <div className={style.headPosition}></div>
        <div className={style.bodyPosition}></div>
        <div className={style.headPosition}></div>
    </div>
  );
}

export default Post;
