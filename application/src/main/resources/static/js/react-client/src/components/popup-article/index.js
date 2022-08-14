import React, {useEffect, useState} from 'react';

import Axios from 'axios';
import style from './style.module.scss';
import Popup from '../popup';
import StringScreen from '../string-screen';

const PopUpArticle = ({article}) => {
  

const [isOpen, setIsOpen] = useState(false);
 
const togglePopup = () => {
  setIsOpen(!isOpen);
}

const togglePopupRefresh = () => {
  setIsOpen(!isOpen);
  //if(refresh == true )setTimeout(window.location.reload(), 1000);
}
  
  return (

   <span>
    <a onClick={togglePopup}>more...</a>
    {isOpen && <Popup
      content={<> <div>
      <div><img src={article.articleImage} className={style.articleImage}/></div>
      <h1 style={{padding: "5px",  margin:"0 10px 20px",textAlign:"left" }}>{article.articleTitle}</h1>
        <h5 style={{padding: "0 5px", margin:"0 10px", textAlign:"left" }}>Published by: {article.authorName}</h5>
        <h5 style={{padding: "5px",  margin:"0 10px",textAlign:"left" }}>Date Created: {article.date}</h5>
        <div style={{padding: "5px",  margin:"0 10px",textAlign:"left" }}>{article.articleBody}</div>
         </div>
      </>}
      handleClose={togglePopupRefresh}
    />}

    </span>
  );
}

export default PopUpArticle;