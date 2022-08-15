import React from 'react'
import style from './style.module.scss';
import styleLink from '../../assets/css/carousel.css';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import articles from '../../assets/landingpageimgs/Articles.png';
import cof from '../../assets/landingpageimgs/chefOfTheMonth.png';
import communityVideo from '../../assets/landingpageimgs/CommunityVideo.mp4';
import event from '../../assets/landingpageimgs/FoodPresentation.jpg';
import instructionchef from '../../assets/landingpageimgs/instructionchef.png';
import instructionguest from '../../assets/landingpageimgs/instructionguest.png';
import meal3 from '../../assets/foodslideshowimgs/meal3.jpg';

const HOmeSlider = ()=> {
  return (
    <>
    <link rel="stylesheet" href={styleLink}></link>
    <div className={style.homeSlider}>
    

<main className="carousel" aria-label="Gallery">
  <ol className="carousel__viewport">
    <li id="carousel__slide1" tabindex="0" className="carousel__slide">
      <div className="carousel__snapper"><img src={instructionchef} width="100%"/>
        <a href="#carousel__slide4" className="carousel__prev">Go to last slide</a>
        <a href="#carousel__slide2" className="carousel__next">Go to next slide</a>
        </div>
    </li>
    <li id="carousel__slide2" tabindex="0" className="carousel__slide">
      <div className="carousel__snapper"><img src={instructionguest} width="100%"/></div>
      <a href="#carousel__slide1" className="carousel__prev">Go to previous slide</a>
      <a href="#carousel__slide3" className="carousel__next">Go to next slide</a>
    </li>
    <li id="carousel__slide3" tabindex="0" className="carousel__slide">
      <div className="carousel__snapper"><img src={event} width="100%"/></div>
      <a href="#carousel__slide2" className="carousel__prev">Go to previous slide</a>
      <a href="#carousel__slide4" className="carousel__next">Go to next slide</a>
    </li>
    <li id="carousel__slide4" tabindex="0" className="carousel__slide">
      <div className="carousel__snapper"><img src={meal3} width="100%"/></div>
      <a href="#carousel__slide3" className="carousel__prev">Go to previous slide</a>
      <a href="#carousel__slide1" className="carousel__next">Go to first slide</a>
    </li>
  </ol>
  <aside className="carousel__navigation">
    <ol className="carousel__navigation-list">
      <li className="carousel__navigation-item">
        <a href="#carousel__slide1" className="carousel__navigation-button">Go to slide 1</a>
      </li>
      <li className="carousel__navigation-item">
        <a href="#carousel__slide2" className="carousel__navigation-button">Go to slide 2</a>
      </li>
      <li className="carousel__navigation-item">
        <a href="#carousel__slide3" className="carousel__navigation-button">Go to slide 3</a>
      </li>
      <li className="carousel__navigation-item">
        <a href="#carousel__slide4" className="carousel__navigation-button">Go to slide 4</a>
      </li>
    </ol>
  </aside>
</main>
    </div>
    </>
  )
}

export default HOmeSlider;