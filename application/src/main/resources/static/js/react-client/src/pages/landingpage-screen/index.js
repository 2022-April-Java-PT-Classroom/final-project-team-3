import React, { useState } from "react";

import meal1 from '../../assets/foodslideshowimgs/meal1.jpg';
import meal2 from '../../assets/foodslideshowimgs/meal2.jpg';
import meal3 from '../../assets/foodslideshowimgs/meal3.jpg';
import style from './style.module.scss';

const LandingpageScreen = () => {
 
    <div className="wrapper">
        <div className="slide">
            <img src={meal1} alt="meal1">
                <div className="text">First Caption</div>
            </img>
        </div>
        <div className="slide">
            <img src={meal2} alt="meal2">
                <div className="text">Second Caption</div>
            </img>
        </div>
        <div className="slide">
            <img src={meal3} alt="meal3">
                <div className="text">Third Caption</div>
            </img>
        </div>

        <div className="prev">&#10094;</div>
        <div className="next">&#10095;</div>
    </div>


    return (
        <div>
            <div className={style.LandingpageScreen}>
                <h1>Welcome to Community</h1>
            </div>

            
            {/* <section className={style.slideshows}>
                <div className="slideshow-pics">
                    
                </div>
                
            </section> */}
            

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
            </section>

        </div>


        );
}

export default LandingpageScreen;