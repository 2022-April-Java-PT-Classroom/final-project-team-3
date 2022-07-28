import React, {useEffect, useState} from "react";

import Axios from "axios";
import style from "./style.module.scss";

const News = () => {

const [news, setNews] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
    const fetchData = async () => {

        const result = await Axios("https://newsapi.org/v2/everything?q=Apple&from=2022-07-24&sortBy=popularity&apiKey=0c749615e4f54f1892a566d56dbdca85");
        setNews(result.data);
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
        <section>
            <div className={style.newsContainer}>
            <h5>{news.author}</h5>
            <h5>{news.title}</h5>   
            <h5>{news.description}</h5>
            <h5 href={news.url}> </h5>      
            <h5 href={news.urlToImage}> </h5>
            <h5>{news.publishedAt}</h5>
            <h5>{news.content}</h5>
            </div>
     </section>
    </div>
    );
}

export default News;