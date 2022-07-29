import 'swiper/css';

import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import meal1 from '../../assets/foodslideshowimgs/meal1.jpg';
import meal2 from '../../assets/foodslideshowimgs/meal2.jpg';
import meal3 from '../../assets/foodslideshowimgs/meal3.jpg';
import meal4 from '../../assets/foodslideshowimgs/meal4.jpg';
import style from './style.module.scss';

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
                <SwiperSlide>
                    <div> <img className={style.meal} src={meal1}></img></div>
                </SwiperSlide>
                <SwiperSlide><div> <img  className={style.meal} src={meal2}></img></div>
                </SwiperSlide>
                <SwiperSlide><div> <img className={style.meal} src={meal3}></img></div>
                </SwiperSlide>
                <SwiperSlide><div> <img className={style.meal} src={meal4}></img></div>
                </SwiperSlide>
                ...
            </Swiper>



export default LandingpageScreen;