import React, { useState } from 'react';
import style from './style.module.scss'

const Accordion = ({ title, content, image }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <div className={style.title} onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className={style.content}>{content}, {image}</div>}
    </div>
  );
};

export default Accordion;