import React, { useState } from "react";

import articlePreview from '../../assets/landingpageimgs/ArticlePreview.png';
import meal1 from '../../assets/foodslideshowimgs/meal1.jpg';
import meal2 from '../../assets/foodslideshowimgs/meal2.jpg';
import meal3 from '../../assets/foodslideshowimgs/meal3.jpg';
import eventpic from '../../assets/foodslideshowimgs/Food Presentatipjpg';
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
                        
            <section className={style.callToAction}>
                <div className="slideShow">
                <h1 className={style.greeting}>Welcome to <span className={style.com}>Community</span></h1>
                    <img className={style.slideShowPic} src={meal3} />
                </div>
            </section>

            <section className={style.eventSection}>
                <div>
                    <a href="/events"><img className={style.eventImg}  scr=' alt="Events" /></a>
                </div>
            </section>
            
            <section className={style.chefOfTheMonth}>
                
            </section>
            
            <section className={style.Tweets}>
                <div className="Twitter">
                    
                </div>
            </section>
            
            <section className={style.IG}>
                <div>
                    
                </div>
            </section>

            <section className={style.featuredArticle}>
            <img className={style.slideShowPic} src={articlePreview} />
            </section>

        </div>


    );
}

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

            
export default LandingpageScreen;