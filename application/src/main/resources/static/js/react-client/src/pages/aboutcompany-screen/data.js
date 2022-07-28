import React from 'react';
import Accordion from './accordionValue';
import topImage from '../../assets/aboutimages/image1.jpg';
import topImage2 from '../../assets/aboutimages/image2.jpg';
import style from './style.module.scss'


const AboutCompany = () => {
  const accordionData = [
    {
      title: 'Value 1',
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`,
      image: <img className={style.bgtopimage} src={topImage2} alt='food'></img>
    },
    {
      title: 'Value 2',
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
      reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
      quaerat iure quos dolorum accusantium ducimus in illum vero commodi
      pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
      quidem maiores doloremque est numquam praesentium eos voluptatem amet!
      Repudiandae, mollitia id reprehenderit a ab odit!`,
      image: <img className={style.bgtopimage} src={topImage2} alt='food'></img>
    },
    {
      title: 'Value 3',
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`,
      image: <img className={style.bgtopimage} src={topImage2} alt='food'></img>
    }
  ];

  const accordionData1 = [
    {
      title: 'Mission 1',
      content: `<img className={style.bgtopimage} src={topImage} alt='food'/> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`,
      image: <img className={style.bgtopimage} src={topImage} alt='food'></img>
    },
    {
      title: 'Mission 2',
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
      reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
      quaerat iure quos dolorum accusantium ducimus in illum vero commodi
      pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
      quidem maiores doloremque est numquam praesentium eos voluptatem amet!
      Repudiandae, mollitia id reprehenderit a ab odit!`,
      image: <img className={style.bgtopimage} src={topImage} alt='food'></img>
      
    },
    {
      title: 'Mission 3',
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`,
      image: <img className={style.bgtopimage} src={topImage} alt='food'></img>
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