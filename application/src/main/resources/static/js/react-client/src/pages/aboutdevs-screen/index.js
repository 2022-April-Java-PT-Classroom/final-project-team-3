import React from "react";
import picFarida from '../../assets/teampics/farida.jpg'
import picGian from '../../assets/teampics/gian.jpg'
import picHailey from '../../assets/teampics/hailey.jpg'
import picHakan from '../../assets/teampics/hakan.jpg'
import picLouis from '../../assets/teampics/louis.jpg'
import picVictor from '../../assets/teampics/victor.jpg'
import style from './style.module.scss'

const AboutDevs =() => {

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
                        <br></br>
                        <p>Hey I'm Victor, Born in Cleveland, Ohio, I've always wanted to take the leap towards a career in technology but kept my plans on hold as life got in the way. But in the mean time, I decided to learn to code on my own as I always felt drawn to it. After I get my Certificate in Software Development, I will finally be able to put it to use and realize my dream of transitioning into a career in tech!</p><br></br>
                        
                            <a href="https://www.linkedin.com/in/victor-negron-742558235/"><h5 className={style.linked}>LinkedIn</h5></a>
                        
                </div>
              
                
                
                <div className={style.section2}>
                    <div className={style.section8}>
                        <h2 className={style.name}>Farida NDiaye</h2>
                    </div>
                        <img className={style.image} src={picFarida} alt='farida'/>
                        <br></br>
                        <p>Hello, I'm Farida. I have an Associate degree and 2 years+ of experience in Business Management, Biology, Chemistry, and Geology. I am passionate about traveling and discovering. I love trying/learning new skills and taking on professional challenges. I'm currently learning Web Development at Columbus State Community College and at We Can Code IT (Bootcamp). I am excited to be learning a lot of new skills and really hope to be able to put that into practice full time as a career soon.</p><br></br>
                        
                            <a href="https://www.linkedin.com/in/faridandiaye/"><h5 className={style.linked}>LinkedIn</h5></a>
                        
                </div>
                
                
                <div className={style.section3}>
                    <div className={style.section9}>
                        <h2 className={style.name}>Hakan Celik</h2>
                    </div>
                        <img className={style.image} src={picHakan} alt='hakan'/>
                        <br></br>
                        <p>I work as a Clinical lab scientist at AmazonDx and am an Ohio Army National Guard member. Additionally, I am a PhD candidate in Biomedical Engineering, and my course projects are mostly concerned with programming and machine learning techniques. Up to this point, I've taken graduate-level Machine learning-related courses such as Applied Statistics, Machine Learning in Biomedical Engineering, Computational Biology, Computational Imaging, and Machine Learning. I am quite interested in the profession of Machine Learning, Data Science and Research Science, and I have made a concerted effort to further my knowledge in these sectors.</p><br></br>                       
                          <a href="www.linkedin.com/in/hakan-celik-84818347"><h5 className={style.linked}>LinkedIn</h5></a>
                        
                </div>
                
                  
                <div className={style.section4}>
                    <br></br>
                    <div className={style.section10}>
                        <h2 className={style.name}>Louis Tchamda</h2>
                    </div>
                        <img className={style.image} src={picLouis} alt='louis'/>
                        <br></br>
                        <p>Full stack developer.
                            Currently taking “WCCI Bootcamp” - completion date: August 2022.
                            For the past 15 years I have designed, developed and maintained different systems, specifically commercial websites, CRM(customer relationship management) and software.
                            I have advanced experience in code analysis, written by other developers, particularly in PHP.</p><br></br>
                        
                            <a href="https://www.linkedin.com/in/louis-tchamda-9589bb74/"><h5 className={style.linked}>LinkedIn</h5></a>
                        
                </div>
                
                
                <div className={style.section5}>
                    <br></br>
                    <div className={style.section11}>
                        <h2 className={style.name}>Hailey Fate</h2>
                    </div>
                        <img className={style.image} src={picHailey} alt='hailey'/>
                        <br></br>
                        <p>Self-motivated Junior Software developer with experience in design and application development. A fast learner with strong time management and multi-taking skills. Proficient troubleshooting and problem-solving skills with an analytical mindset. Loyal, reliable, and ready to be challenged. Experienced in training and creating course curriculum for small, med-sized, and large business entities. Team player with exemplary managerial skills.</p><br></br>
                        
                            <a href="https://www.linkedin.com/in/haileyfate/"><h5 className={style.linked}>LinkedIn</h5></a>
                        
                </div>
                
                
                
                <div className={style.section6}>
                    <br></br>
                    <div className={style.section12}>
                        <h2 className={style.name}>Gian Ramirez</h2>
                    </div>
                        <img className={style.image1} src={picGian} alt='gian'/>
                        <br></br>
                        <p>Past life HR pro, current life software developer. You can catch me gaming on pc or console most days, or outside smoking a nice cigar.</p><br></br>
                        
                            <a href="https://www.linkedin.com/in/gian-ramirez-dev/"><h5 className={style.linked}>LinkedIn</h5></a> 
                        
                </div>

            </div>


       

        </div>
    );
}
export default AboutDevs;