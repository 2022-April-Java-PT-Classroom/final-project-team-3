import React,{useEffect, useState} from "react";

import ArticleForm from "./ArticleForm";
import Axios from "axios";
import ImageComponent from "../../components/imageDisplay/imageComponent";
import StatusPost from "../Post-status";
import PopUpArticle from "../../components/popup-article";
import style from './style.module.scss';


const Article = () => {

        const [loadingArticle, setArticle] = useState(true),
        [article, setBlogList] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const result = await Axios('http://localhost:8080/article');
            setBlogList(result.data);
        }

        if (article) {
            setArticle(false);
        }

        const timer = setTimeout(() => {
            !article && fetchData(); 
        }, 1000);
        return () => clearTimeout(timer);

    }, [article]);

    let refresh = false;
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
      }
      
      const togglePopupRefresh = () => {
        setIsOpen(!isOpen);
        if(refresh == true )setTimeout(window.location.reload(), 1000);
      }

    return (
        <div>
          
            <div >
                
            

            </div>
            {loadingArticle ? <h3>Loading Articles ...</h3> :
                <>
                    <h2>Articles In Today!</h2>
                    
                    <ArticleForm/>
                    {/* <div >
                    {article.map(article => (
                        <div >
                            
                            <div key={article.id}>
                            <p >Article Title: {article.articleTitle}</p>
                             <p><ImageComponent url={article.articleImage}/></p>
                             <p >Content: {article.articleBody}</p> 
                             <p >Published by: {article.authorName}</p>  
                            <p >Date Created: <br /> {article.date}</p>
                               
                            </div>    
                            
                        </div>
                    ))}
                    </div> */}
                    <div className={style.newsGrid}>
                   <div className={style.container1}>
                   {article.map(article => (

                        <div className={style.item}>
                            <h1>{article.articleTitle}</h1>
                            <h5>Published by: {article.authorName}</h5>
                            <h5>Date Created: {article.date}</h5>
                            <div style={{width:"100%", height:"200px",background:`url(${article.articleImage}) no-repeat`, backgroundSize:"390px"}}></div>
                            <div className={style.container}>
                            {/* <parseFloat> {article.articleBody} <a onClick={togglePopup}>more...</a></parseFloat> */}
                            <parseFloat><span className={style.ellipsis}>{article.articleBody}</span> <span style={{textAlign:"left"}}><PopUpArticle article={article}/></span></parseFloat>
                            
                            </div>
                        </div>

                   ))}

                   </div>
                   </div>
                    
                </>
                
            }
        </div>
    );
}

export default Article;