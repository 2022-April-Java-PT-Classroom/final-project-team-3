import React, { useState } from 'react';

import FAQ from './FAQ';
import style from './style.module.scss';

const FaqPage = () => {
    const [faqs, setFaqs] = useState([

        {
            question: 'How does the Community help people in need?',
            answer: 'We at the Community help people in need by helping find food in your local area.',
            open: false
        },
        {
            question: 'How does the Community help people in need?',
            answer: 'We at the Community help people in need by helping find food in your local area.',
            open: false

        },
        {
            question: 'How does the Community help people in need?',
            answer: 'We at the Community help people in need by helping find food in your local area.',
            open: false

        }
    ]);
    const toggleFaq = index => {
setFaqs(faqs.map((faq,i) => {
    if (i === index) {
        faq.open = !faq.open
    } else{
        faq.open = false;
    }
    return faq;
}))
    }




  return (
      <div className={style.faqs}>
          <h1>FAQ PAGE</h1>
        {faqs.map((faq,i) => (
           <FAQ faq={faq} index={i} toggleFaq={toggleFaq} />
        ))}
      </div>

  );
}

export default FaqPage