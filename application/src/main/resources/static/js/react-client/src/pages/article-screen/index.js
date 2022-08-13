import React,{useEffect, useState} from "react";

import ArticleForm from "./ArticleForm";
import Axios from "axios";
import ImageComponent from "../../components/imageDisplay/imageComponent";
import StatusPost from "../Post-status";
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


    

    return (
        <div>
          
            <div >
                
            

            </div>
            {loadingArticle ? <h3>Loading Articles ...</h3> :
                <>
                    <h2>Articles In Today!</h2>
                    
                    <ArticleForm/>
                    <div >
                    {article.map(article => (
                        <div className={style.Acss}>
                            
                            <div key={article.id}>
                            <p >Article Title: {article.articleTitle}</p>
                            {/* <p><ImageComponent url={article.articleImage}/></p> */}
                            <p><ImageComponent url={article.articleImage}/></p>
                             <p >Content: {article.articleBody}</p> 
                             <p >Published by: {article.authorName}</p>  
                            <p >Date Created: <br /> {article.date}</p>
                               
                            </div>    
                            
                        </div>
                    ))}
                    </div>
                </>
            }

        </div>
    );
}

export default Article;