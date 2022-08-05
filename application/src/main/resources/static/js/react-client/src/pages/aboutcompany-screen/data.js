import Accordion from './accordionValue';
import React from 'react';
import mission from '../../assets/aboutimages/smile.jpg';
import mission2 from '../../assets/aboutimages/comunity2.jpg';
import mission3 from '../../assets/aboutimages/comunity3.jpg';
import style from './style.module.scss';
import topImage from '../../assets/aboutimages/image1.jpg';
import topImage2 from '../../assets/aboutimages/image2.jpg';
import topImage3 from '../../assets/aboutimages/donate.jpg';
import topImage4 from '../../assets/aboutimages/freefood.jpg';
import topImage5 from '../../assets/aboutimages/volunteer.jpg';

const AboutCompany = () => {
  const accordionData = [
    {
      title: 'CARING',
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`,
      image: <img className={style.bgtopimage} src={topImage3} alt='food'></img>
    },
    {
      title: 'RESOURCEFUL',
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
      reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
      quaerat iure quos dolorum accusantium ducimus in illum vero commodi
      pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
      quidem maiores doloremque est numquam praesentium eos voluptatem amet!
      Repudiandae, mollitia id reprehenderit a ab odit!`,
      image: <img className={style.bgtopimage} src={topImage5} alt='food'></img>
    },
    {
      title: 'INCLUSIVE',
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`,
      image: <img className={style.bgtopimage} src={topImage4} alt='food'></img>
    }
  ];

  const accordionData1 = [
    {
      title: 'COMMUNITY',
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`,
      image: <img className={style.bgtopimage} src={mission2} alt='food'></img>
    },
    {
      title: 'PUT SMILE ON FACES',
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
      reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
      quaerat iure quos dolorum accusantium ducimus in illum vero commodi
      pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
      quidem maiores doloremque est numquam praesentium eos voluptatem amet!
      Repudiandae, mollitia id reprehenderit a ab odit!`,
      image: <img className={style.bgtopimage} src={mission} alt='food'></img>
      
    },
    {
      title: 'SHARE',
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`,
      image: <img className={style.bgtopimage} src={mission3} alt='food'></img>
    }
  ];


  return (
    <div className={style.wrapper}>
      
    <div className={style.container}>
      <div className={style.who}>
        <h1 >Who we are</h1>
        </div>  
      <div className={style.accordion}>
        <h1>Our Value</h1>
        {accordionData.map(({ title, content, image }) => (
          <Accordion title={title} content={content} image={image} />
        ))}
      </div>
      
      <div className={style.accordion1}>
        <h1>Our Mission</h1>
        {accordionData1.map(({ title, content, image }) => (
          <Accordion title={title} content={content} image={image} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default AboutCompany;