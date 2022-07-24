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
            <div>
                <h1 className={style.title}>Our Development Team</h1>
                <p className={style.p}>
                    <strong>Meet our developers</strong>: a dynamic and engaging team working together to contribute to their community development.
                </p>
            </div>
            <div className={style.container}>

                <div className={style.section1}>
                    <div className={style.section7}>
                        <h2 className={style.name}>Victor Negron</h2>
                    </div>
                        <img className={style.image1} src={picVictor} alt='victor'/>
                        <p>Hey I'm Victor, Born in Cleveland, Ohio, I've always wanted to take the leap towards a career in technology but kept my plans on hold as life got in the way. But in the mean time, I decided to learn to code on my own as I always felt drawn to it. After I get my Certificate in Software Development, I will finally be able to put it to use and realize my dream of transitioning into a career in tech!</p>
                        
                            <a href="https://www.linkedin.com/in/victor-negron-742558235/"><h5 className={style.linked}>LinkedIn</h5></a>
                        
                </div>
                
                
                
                <div className={style.section2}>
                    <div className={style.section8}>
                        <h2 className={style.name}>Farida NDiaye</h2>
                    </div>
                        <img className={style.image} src={picFarida} alt='farida'/>
                        <p>Hello, I'm Farida. I live in Columbus, passionate about traveling and discovering. I love trying/learning new skills and taking on professional challenges.</p>
                        
                            <a href="https://www.linkedin.com/in/faridandiaye/"><h5 className={style.linked}>LinkedIn</h5></a>
                        
                </div>
                
                
                <div className={style.section3}>
                    <div className={style.section9}>
                        <h2 className={style.name}>Hakan Celik</h2>
                    </div>
                        <img className={style.image} src={picHakan} alt='hakan'/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        
                            <a href="www.linkedin.com/in/hakan-celik-84818347"><h5 className={style.linked}>LinkedIn</h5></a>
                        
                </div>
                
                
                <div className={style.section4}>
                    <div className={style.section10}>
                        <h2 className={style.name}>Louis Tchamda</h2>
                    </div>
                        <img className={style.image} src={picLouis} alt='louis'/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        
                            <a href="https://www.linkedin.com/in/louis-tchamda-9589bb74/"><h5 className={style.linked}>LinkedIn</h5></a>
                        
                </div>
                
                
                <div className={style.section5}>
                    <div className={style.section11}>
                        <h2 className={style.name}>Hailey Fate</h2>
                    </div>
                        <img className={style.image} src={picHailey} alt='hailey'/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        
                            <a href="https://www.linkedin.com/in/haileyfate/"><h5 className={style.linked}>LinkedIn</h5></a>
                        
                </div>
                
                
                
                <div className={style.section6}>
                    <div className={style.section12}>
                        <h2 className={style.name}>Gian Ramirez</h2>
                    </div>
                        <img className={style.image1} src={picGian} alt='gian'/>
                        <p>Past life HR pro, current life software developer. You can catch me gaming on pc or console most days, or outside smoking a nice cigar.</p>
                        
                            <a href="https://www.linkedin.com/in/gian-ramirez-dev/"><h5 className={style.linked}>LinkedIn</h5></a> 
                        
                </div>

            </div>


       

        </div>
    );
}
export default AboutDevs;