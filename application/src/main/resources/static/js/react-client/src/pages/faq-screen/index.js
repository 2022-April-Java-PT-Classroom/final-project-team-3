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
            question: 'How can i find food in my area?',
            answer: 'To find food in your area navagate to the find food section and type your location. There you will see on the map where food is available locally.',
            open: false

        },
        {
            question: 'I have extra food! How can i give it away?',
            answer: 'Thank you for contributing to our cause its simple please register and post all the information so others will be able to find it.',
            open: false

        },
     
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
          <h1>Frequently Asked Questions</h1>
        {faqs.map((faq,i) => (
           <FAQ faq={faq} index={i} toggleFaq={toggleFaq} />
        ))}
      </div>

  );
}

export default FaqPage