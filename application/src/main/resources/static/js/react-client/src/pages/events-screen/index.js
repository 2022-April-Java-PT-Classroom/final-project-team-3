import React, {useEffect, useState} from "react";

import Axios from "axios";
import style from "./style.module.scss";

const News = () => {

const [news, setNews] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
    const fetchData = async () => {
        const result = await Axios('https://newsapi.org/v2/everything?' +
        'q=food&' +
        'language=en&' +
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
    loading ? <h3>Loading Events...</h3> :
  
    < div className={style.newsGrid}>
        
      
           {news.map(news1 =>
                  
                    <div className={style.sections}>
                     
                        <h1>{news1.source.name}</h1>
                        <h2 className={style.title}>{news1.title} </h2>
                        <h5>Published At: {news1.publishedAt}</h5> 
                            {/* <a href={news1.url}> <img src={news1.urlToImage} ></img></a> */}
                            <a href={news1.url} target="_blank"> <div style={{width:"100%", height:"200px",background:`url(${news1.urlToImage}) no-repeat`, backgroundSize:"390px"}}></div></a>
                            
                              <div className={style.container}>
                                <parseFloat>{news1.content} <a href={news1.url}>more...</a></parseFloat>
                              </div>
                            
                        </div>
                  
           
                )} 
         
   </div>
    );
}

export default News;