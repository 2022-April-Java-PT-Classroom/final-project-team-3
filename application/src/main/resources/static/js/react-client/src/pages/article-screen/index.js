import React,{useEffect, useState} from "react";

import Axios from "axios";
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
          
            <div className={style.form__container}>
                
            

            </div>
            {loadingArticle ? <h3>Loading Articles ...</h3> :
                <>
                    <h2>Articles In Today!</h2>
                    <ul>
                        {article.map(article => (
                            <div key={article.id}>
                                
                            
                            </div>
                        ))}
                    </ul>
                    <div className={style.container}>
                    {article.map(article => (
                        <div className = {style.item}>
                            
                            <div key={article.id}>
                                
                            <table >
                                    <tr>
                                        <td><p>Author Name: {article.authorName}</p></td>
                                    </tr>
                                    <tr>
                                        <td><p>Article Title: {article.articleTitle}</p></td>
                                    </tr>
                                    <tr >
                                    <td><p>Content: {article.articleBody}</p></td>
                                    </tr>
                                    <tr >
                                    <td><p>date: {article.date}</p></td>
                                        </tr>
                                        
                                       
                                </table>  
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