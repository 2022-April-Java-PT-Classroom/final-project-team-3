import React, { useState } from "react";

import { TwitterTimelineEmbed } from 'react-twitter-embed';
import articles from '../../assets/landingpageimgs/Articles.png';
import cof from '../../assets/landingpageimgs/cof.jpg';
import meal1 from '../../assets/foodslideshowimgs/meal1.jpg';
import meal2 from '../../assets/foodslideshowimgs/meal2.jpg';
import meal3 from '../../assets/foodslideshowimgs/meal3.jpg';
import style from './style.module.scss';

const LandingpageScreen = () => {

    

    // if (/^[a-zA-Z]+$/.test("をネイティブサポート")) //if the English language 
    //     {
    //     alert("english");
    //     } 
    //     else //if the not English language
    //     {
    //     alert("Not English");
    // }
 
    let currentSlide = 0;
    function moveSlide(direction) {
        currentSlide = currentSlide + direction;

        const slides = document.querySelectorAll(".slide");
        slides.forEach(slide => slide.style.display = "none");
        slides[currentSlide].style.display = "flex";

       
    }
                                           

    return (
        
        <div>
                        
            {/* <section className={style.callToAction}>
                <div className="slideShow">
                <h1 className={style.greeting}>Hungry? Think <span className={style.com}>Community</span></h1>
                    <img className={style.slideShowPic} src={meal3} />
                </div>
            </section> */}

            <section className={style.eventSection}>
                <div>
                    <a href="/events"><img className={style.eventImg} alt="Events" /></a>
                </div>
                    
                <div className={style.chefOfTheMonth}>
                    <h3>Chef of the Month </h3>
                    <img className={style.chef} src={cof} alt="Chef of the Month" />
                </div>
                    
                <div className={style.tweets}>
                    <div className="Twitter">
                        <TwitterTimelineEmbed
                            sourceType="profile"
                            screenName="CommunityWcci"
                            options={{height: 600, width: 400}}
                            />    
                    </div>
                </div>
            </div>    

            <div className={style.IG}>
                <div>
                    
                </div>
            </div>
            
            <div className={style.featuredArticle}>
            <img className={style.articlesPic} src={articles} />
            </div>

    </div>

    );
}
            
export default LandingpageScreen;