import React, { useState } from 'react';

import StatusPost from '.';
import axios from 'axios';

const StatusForm = ({StatusForm }) => {

    

    const [formInfo, setFormInfo] = useState({
        foodImages: "",
        userPoster: "",
        status: "",
        
        
       
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

        const Posts = {
            
            foodImages: formInfo.foodImages,
            userPoster: formInfo.userPoster,
            status: formInfo.status
            
            
            
        };

        axios.post('http://localhost:8080/api/posts/new-post', Posts).then((response) => {
            console.log(response.status);
            console.log('DATA', response.data);
            setFormInfo(response.data);
        });
        window.location.reload();
    };


    return (
        <div >
    <form onSubmit={handleSubmit}>
                    <input type="text" name="authorName" value={StatusPost.userPoster} onChange={handleChange} placeholder='Enter your name' />
                    
                    <input type="url" name="foodImages" value={StatusPost.foodImages} onChange={handleChange} placeholder='Enter The Url Image' />
                    <textarea name="status" value={StatusPost.status} onChange={handleChange} placeholder='Whats on Your Mind Today?' />
                    <button type="submit">Submit</button>
                </form>
           
           
        </div>

    );
}

export default StatusForm;