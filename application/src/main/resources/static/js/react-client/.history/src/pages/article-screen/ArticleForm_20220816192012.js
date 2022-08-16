import React, { useState } from 'react';

import Article from '.';
import axios from 'axios';
import style from './style.module.scss';

const ArticleForm = ({articleForm }) => {

    

    const [formInfo, setFormInfo] = useState({
        authorName: "",
        articleTitle: "",
        articleBody: "",
        articleImage: ""
        
       
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setFormInfo({
            ...formInfo,
            [e.target.name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const authorData = {
            authorName: formInfo.authorName,
            articleTitle: formInfo.articleTitle,
            articleBody: formInfo.articleBody,
            articleImage: formInfo.articleImage
            
            
        };

        axios.post('http://localhost:8080/api/article/new-articles', authorData).then((response) => {
            console.log(response.status);
            console.log('DATA', response.data);
            setFormInfo(response.data);
        });
        window.location.reload();
    };


    return (
        <div className={style.articleform} >
    <form  className={style.articleform} onSubmit={handleSubmit}>
         <h1 className={style.logintitle}>Login</h1>
         <div className={style.content}>
                <div className={style.inputfield}>
                    <input type="text" name="authorName" value={Article.authorName} onChange={handleChange} placeholder='Enter The Author Name' />
                </div>
                <div className={style.inputfield}>
                    <input type="text" name="articleTitle" value={Article.articleTitle} onChange={handleChange} placeholder='Enter The Title' />
                </div>
                <div className={style.inputfield}>
                    <input type="url" name="articleImage" value={Article.articleImage} onChange={handleChange} placeholder='Enter The Url Image' />
                </div>  
                <div className={style.inputfield}>
                    <textarea name="articleBody" value={Article.articleBody} onChange={handleChange} placeholder='Enter Description' />
                </div>
            </div>
                <div className={style.action}>
                    <button type="submit">Submit</button>
                </div>
                </form>
           
           
        </div>

    );
}

export default ArticleForm;