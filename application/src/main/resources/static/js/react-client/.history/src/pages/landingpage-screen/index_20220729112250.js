import 'swiper/css';

import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import style from './style.module.scss';

// import meal1 from '../../assets/foodslideshowimgs/meal1.jpg';
// import meal2 from '../../assets/foodslideshowimgs/meal2.jpg';
// import meal3 from '../../assets/foodslideshowimgs/meal3.jpg';

const data = [
    {

    }
    
]
const LandingpageScreen = () => {
 
    let currentSlide = 0;
    function moveSlide(direction) {
        currentSlide = currentSlide + direction;

        const slides = document.querySelectorAll(".slide");
        slides.forEach(slide => slide.style.display = "none");
        slides[currentSlide].style.display = "flex";
    }
                                           

    return (
        <div>
            <div className={style.LandingpageScreen}>
                <h1>Welcome to Community</h1>
            </div>

            <Swiper
            // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                ...
            </Swiper>
            {/* <section className={style.slideshow}>
                <div className="slide">
                    <img className="imgslide" src={meal1} alt="meal1" />
                        <div className="text">First Caption</div>
                </div>
                <div className="slide">
                    <img className="imgslide" src={meal2} alt="meal2" />
                        <div className="text">Second Caption</div>

                </div>
                <div className="slide">
                    <img className="imgslide" src={meal3} alt="meal3" />
                        <div className="text">Third Caption</div>
                </div>
                <div className="prev" onClick={moveSlide(-1)}>&#10094;</div>
                <div className="next" onClick={moveSlide(1)}>&#10095;</div>
                
            </section>
            

            <section className={style.events}>
                <div>
                    
                </div>
            </section>

            <section className={style.minislideshows}>
                <div className={style.chef}>
                    
                </div>
                <div className={style.twitter}>
                    
                </div>
                <div className={style.ig}>
                    
                </div>
            </section>
            <section className={style.featuredarticle}>
                <div>
                    
                </div>
            </section> */}

        </div>


    );
}

export default LandingpageScreen;