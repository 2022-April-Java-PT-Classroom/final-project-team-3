import React, { useState } from 'react';
import style from './style.module.scss'

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <div className={style.title} onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className={style.content}>{content}</div>}
    </div>
  );
};

export default Accordion;