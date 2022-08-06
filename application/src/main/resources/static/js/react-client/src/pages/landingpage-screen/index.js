import React, { useState } from "react";

import { TwitterTimelineEmbed } from 'react-twitter-embed';
import articles from '../../assets/landingpageimgs/Articles.png';
import cof from '../../assets/landingpageimgs/chefOfTheMonth.png';
import communityVideo from '../../assets/landingpageimgs/CommunityVideo.mp4';
import event from '../../assets/landingpageimgs/FoodPresentation.jpg';
import meal1 from '../../assets/foodslideshowimgs/meal1.jpg';
import meal2 from '../../assets/foodslideshowimgs/meal2.jpg';
import meal3 from '../../assets/foodslideshowimgs/meal3.jpg';
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
    <div className={style.allbody}>    

        <div>      
            <section className={style.callToAction}>
                <div className="slideShow">
                <h1 className={style.greeting}>Hungry? Think <span className={style.com}>Community</span></h1>
                    <img className={style.slideShowPic} src={meal3} />
                </div>
            </section>
        </div>
        <div>
            <section>
                <video src={communityVideo} width="1500" height="800" controls="controls" autoPlay="true" className={style.video} />
            </section>
        </div>

        <div>
            <section>
                <div className="Reviews">
                    
                </div>
            </section>
        </div>
        
        <div className={style.middle}>

                <div className={style.featuredArticle}>
                    <img className={style.articlesPic} src={articles} />
                </div>    
                
                
                
                    
                <div className={style.chefOfTheMonth}>
                    {/* <h3>Chef of the Month </h3> */}
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
            <div className={style.eventSection}>
                    <div>
                        {/* <h3>Events</h3> */}
                        <a href="/events"><img className={style.event} src={event} alt="Events Picture" /></a>
                    </div>
                </div>

            <div className={style.IG}>
                <div>
                    
                </div>
            </div>
            
            

    </div>

    );
}
            
export default LandingpageScreen;