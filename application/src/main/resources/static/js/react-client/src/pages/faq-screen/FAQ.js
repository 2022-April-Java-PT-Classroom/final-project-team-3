import React from 'react'
import style from './style.module.scss';

const FAQ = ({faq, index, toggleFaq}) => {
  return (
    <div 
        className={style.faq + (faq.open ? 'open' : '')} 
        key={index}
        onClick={() => toggleFaq(index)}
        > 
        <div className={style.faqQuestion}>
            {faq.question}
            </div>       
            <div className={style.faqAnswer}>
            {faq.answer}
            </div>    
    </div>
  )
}

export default FAQ