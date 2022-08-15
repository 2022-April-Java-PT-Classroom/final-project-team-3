import React, {useEffect, useState} from 'react';
import { useHistory, useParams } from 'react-router-dom';

import {Avatar} from '@mui/material';
import {Button} from '@mui/material';
import {IconButton}from '@mui/material';
import Post from '../post';
import User from '../userinfo';
import axios from 'axios';
import style from './style.module.scss';

// import AddPhotoIcon from '@mui/icons-material/AddAPhoto';
const Feeds = () => {

  // const URL_END_POINT = 'http://localhost:8080/api/food';

  // class FoodService {
  //    getOneFood(foodId) {
  //     return axios.get(URL_END_POINT +'/' +foodId);
  //   }

  //   addFood(food) {
  //     return axios.post(URL_END_POINT, food);
  //   }
  // }
  
    const [foodName, setFoodName] = useState('');
    const [foodDescription, setFoodDescription] = useState('');
    const [picture, setPicture] = useState('');

  //   const history = useHistory();
  //   const {id} = useParams();
    
  //   const AddFood = (e) => {
  //     e.preventDefault();
      
  //     const food = {foodName, foodDescription, picture}

  //     FoodService.addeFood(food).then((response => {
  //       history.push('/food')

  //     })).catch(error => {
  //       console.log(error);
  //     })
  //   }

  // useEffect(() => {
  //   FoodService.getOneFood(id).then((response => {
  //     setFoodName(response.data.foodName);
  //     setFoodDescription(response.data.foodDescription);
  //     setPicture(response.data.picture);
  //   }))
  // })

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className={style.mainFeedsContainer}>
        {/* <div className={style.topContainer}>
        <div className={style.feedInputContainer}>
            <div className={style.avatarContainer}><Avatar src=""></Avatar></div>
            <div className={style.inputContainer}>
                <input className={style.postDesc} 
                type='text'
                value={foodName}
                placeholder='Enter Food Title'
                onChange={(e) =>{setFoodName(e.target.value)}}/>
                <input className={style.postDesc} 
                type='text'
                value={foodDescription}
                placeholder='Enter Food Description'
                onChange={(e) =>{setFoodDescription(e.target.value)}}/>
                <input className={style.postDesc} 
                type='text'
                value={picture}
                placeholder='Enter Food Title'
                onChange={(e) =>{setPicture(e.target.value)}}/>
              
                </div>  
        </div>
        <div className={style.feedPostButtonContainer}>
          <Button className={style.postBtn} onClick={(e) => handleSubmit(e)}>Post</Button>
        </div>
        <hr className={style.hrId}/>
        <div className={style.iconButtonsActions}>
          
          <div className={style.iconButtonAction}>
            <label for="imageFile">
              <input type="file" id="imageFile" accept="image/*" hidden='true'/>
            <IconButton id='addAPhotoIc' component="span">
            <AddPhotoIcon />
            </IconButton>
            </label>
            <h5 className={style.actionButtonText}>Upload Photo</h5>
          </div>
        </div>
       </div>  */}
       <div className={style.bottomContainer}>
        <h3 className={style.usersPost}>User Posts</h3>
        <Post/>
       </div>
    </div>
    
  )
}

export default Feeds;