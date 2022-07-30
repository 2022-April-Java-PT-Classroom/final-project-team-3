import React, {useEffect, useState} from "react";

import Axios from "axios";
import style from "./style.module.scss";

const News = () => {

const [news, setNews] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
    const fetchData = async () => {
        const result = await Axios('https://newsapi.org/v2/everything?' +
        'q=Apple&' +
        'sortBy=publishedAt&' +
        'apiKey=0c749615e4f54f1892a566d56dbdca85');
        setNews(result.data.articles);
        console.log(result.data.articles);
    };

    if (news) {
        setLoading(false);
    }
    
    const timer = setTimeout(() => {
        !news && fetchData() ;
    }, 1000);
    return () => clearTimeout(timer);
    
}, [news]);

return ( 
    loading ? <h3>Loading...</h3> :
    <div className={style.newsGrid}>
       
           {news.map(news1 =>
                    <div className={style.sections}>
                        
                            <a href={news1.source.url}>{news1.source.name}</a>
                            <h1>{news1.source.name}</h1>
                            <h2>{news1.content}</h2>
                            <h2>{news1.author}</h2>
                            <h2>{news1.description}</h2>
                    </div>
                )} 
           

         
            </div>
    );
}

export default News;