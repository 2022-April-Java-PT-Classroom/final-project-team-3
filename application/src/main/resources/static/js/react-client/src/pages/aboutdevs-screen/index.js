import React from "react";
import picGian from '../../assets/teampics/gian.jpg'
import picFarida from '../../assets/teampics/farida.jpg'
import picHakan from '../../assets/teampics/hakan.jpg'
import picVictor from '../../assets/teampics/victor.jpg'
import picHailey from '../../assets/teampics/hailey.jpg'
import picLouis from '../../assets/teampics/louis.jpg'
import style from './style.module.scss'

const AboutDevs = () => {
    return (
        <div className={style.aboutDevs}>
            <div className={style.container}>

                
                <div className={style.section7}>
                    <p>Gian Ramirez</p>
                </div>
                <div className={style.section1}>
                    <img className={style.image} src={picGian} alt='gian'/>
                    <p>Past life HR pro, current life software developer. You can catch me gaming on pc or console most days, or outside smoking a nice cigar.</p>
                </div>

                <div className={style.section8}>
                    <p>Farida NDiaye</p>
                </div>
                <div className={style.section2}>
                    <img className={style.image} src={picFarida} alt='farida'/>
                    <p>Hello, I'm Farida. I live in Columbus, passionate about traveling and discovering. I love trying/learning new skills and taking on professional challenges.</p>
                </div>
                
                <div className={style.section9}>
                    <p>Hakan Celik</p>
                </div>
                <div className={style.section3}>
                    <img className={style.image} src={picHakan} alt='hakan'/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                
                <div className={style.section10}>
                    <p>Victor Negron</p>
                </div>
                <div className={style.section4}>
                    <img className={style.image} src={picVictor} alt='victor'/>
                    <p>Hey I'm Victor, Born in Cleveland, Ohio, I've always wanted to take the leap towards a career in technology but kept my plans on hold as life got in the way. But in the mean time, I decided to learn to code on my own as I always felt drawn to it. After I get my Certificate in Software Development, I will finally be able to put it to use and realize my dream of transitioning into a career in tech!</p>
                </div>
                
                <div className={style.section11}>
                    <p>Hailey Fate</p>
                </div>
                <div className={style.section5}>
                    <img className={style.image} src={picHailey} alt='hailey'/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                
                <div className={style.section12}>
                    <p>Louis II</p>
                </div>
                <div className={style.section6}>
                    <img className={style.image} src={picLouis} alt='louis'/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                

            </div>

        </div>
    );
}
export default AboutDevs;