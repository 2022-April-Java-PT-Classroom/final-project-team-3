import React, { useState } from 'react';

import Article from '.';
import axios from 'axios';

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
        <div className={style.art} >
    <form onSubmit={handleSubmit}>
                    <input type="text" name="authorName" value={Article.authorName} onChange={handleChange} placeholder='Enter The Author Name' />
                    <input type="text" name="articleTitle" value={Article.articleTitle} onChange={handleChange} placeholder='Enter The Title' />
                    <input type="url" name="articleImage" value={Article.articleImage} onChange={handleChange} placeholder='Enter The Url Image' />
                    <textarea name="articleBody" value={Article.articleBody} onChange={handleChange} placeholder='Enter Description' />
                    <button type="submit">Submit</button>
                </form>
           
           
        </div>

    );
}

export default ArticleForm;