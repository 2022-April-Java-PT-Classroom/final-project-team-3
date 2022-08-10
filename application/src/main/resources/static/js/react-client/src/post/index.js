import React, {useEffect, useState} from 'react';

import {Avatar} from '@mui/material';
import Axios from 'axios';
import style from './style.module.scss';

function Post() {

  var chiefId = 0;
  if(localStorage.getItem("token")!=""){
  const resObj = JSON.parse(localStorage.getItem("token"));
  
  chiefId= resObj.userId; console.log(chiefId);
  }
  //Long chiefId, Long foodTypeId, String foodName, String foodDescription, int cookingTime, double estimatedCost, String postedDate, int expirationTime
  
  const xchiefId = document.querySelector("#chiefId"),
        xfoodTypeId = document.querySelector("#foodTypeId"),
        xfoodName = document.querySelector("#foodName") ,
        xfoodDescription = document.querySelector("#foodDescription") ,
        xcookingTime = document.querySelector("#cookingTime") ,
        xestimatedCost = document.querySelector("#estimatedCost") ,
        xpostedDate = document.querySelector("#postedDate") ,
        xexpirationTime =  document.querySelector("#expirationTime") ,
        xpicture =  document.querySelector("#picture") ,
        xup = document.querySelector("#up"),
        xfoodId = document.querySelector("#foodId"),
        xfoodSubmit =  document.querySelector("#foodSubmit") ;
  
  const handleReset =() => {
    xchiefId.value = ""; 
    xfoodTypeId.value = "";
    xfoodName.value = ""; 
    xfoodDescription.value = "";
    xcookingTime.value = "";
    xestimatedCost.value = "";
    xpostedDate.value = "";
    xexpirationTime.value = "";    
    xpicture.value = "";   
    xup.value = "0"; 
    xfoodId.value = "0"; 
    xfoodSubmit.innerHTML = "Post food";
  }

  
  const handlePreUpdate = (foodId, chiefId, foodType, foodName, foodDescription, cookingTime, 
    estimatedCost, postedDate, expirationTime, picture) => {

      xchiefId.value = chiefId; alert("check OK for food type value:"+foodType.id);
      const ftId = foodType.id;

      xfoodTypeId.value = ftId; 
      xfoodName.value = foodName;
      xfoodDescription.value = foodDescription;
      xcookingTime.value = cookingTime;
      xestimatedCost.value = estimatedCost;
      xpostedDate.value = postedDate;
      xexpirationTime.value = expirationTime; 
      xpicture.value = picture; 
     
    xup.value = "up";
    xfoodId.value = foodId;
    xfoodSubmit.innerText = "Update Food";


}


  const handleSubmit = (e) => {
    e.preventDefault();
    //alert("check OK for food type value:"+document.querySelector("#foodTypeId").value);
    const xfoodName = document.querySelector("#foodTypeId").value;

    const userData = {
      chiefId: chiefId,
      foodTypeId: xfoodTypeId.value,
      foodName: xfoodName,
      foodDescription:  xfoodDescription.value,
      cookingTime: xcookingTime.value,
      estimatedCost : xestimatedCost.value,
      postedDate: xpostedDate.value,
      expirationTime: xexpirationTime.value, 
      picture: xpicture.value, 
      foodId: xfoodId.value
    }; 
    //alert("OK?");
    console.log(userData);
    
    if(xup.value=="0" && xfoodId.value=="0"){  
        Axios.post('http://localhost:8080/api/food/post-food-chief', userData).then((response) => { 
            console.log(response.status);
            console.log('DATA', response.data);
           // setFoodsState(response.data);
            handleReset();
            document.querySelector("#resultPostFood").innerHTML = "Thank you! Your food " + response.data + " Send";
        });

        window.location.reload();
    } 

    if(xup.value=="up" && xfoodId.value>=0){
      Axios.put(`http://localhost:8080/api/food/${xfoodId.value}/update-food`, userData).then((response) => {
          console.log('Update successful');
          console.log('DATA', response.data);

          //setFoodsState(response.data);
      });
      window.location.reload();
  }

    
};

const handleDelete = (foodId, foodName) => {
  if(window.confirm("Delete " + foodName + " [" + foodId +"]?")){
      Axios.delete(`http://localhost:8080/api/food/${foodId}/delete-food`).then((response) => {
          console.log('Delete successful');
          console.log('DATA', response.data);
          //setFoodsState(response.data);
      });
      window.location.reload();
  }
}

const [loadingFood, setLoadingFood] = useState(true),
[foods, setFoods] = useState(null);

useEffect(() => {
    const fetchData = async () =>{
        const result = await Axios(`http://localhost:8080/api/food/chief/${chiefId}`);
        setFoods(result.data);
        console.log(result.data);
    }

    if(foods){
      setLoadingFood(false);
    }

    const timer = setTimeout(() => {
        !foods && fetchData(); 
    }, 1000);

    return () => clearTimeout(timer);

},[foods]);


  const [loadingFoodType, setLoadingFoodType] = useState(true),
    [foodTypes, setFoodTypes] = useState(null);

    useEffect(() => {
        const fetchData = async () =>{
            const result = await Axios('http://localhost:8080/api/foodType');
            setFoodTypes(result.data);
        }

        if(foodTypes){
          setLoadingFoodType(false);
        }

        const timer = setTimeout(() => {
            !foodTypes && fetchData(); 
        }, 1000);

        return () => clearTimeout(timer);

    },[foodTypes]);
    
    
  //Long chiefId, Long foodTypeId, String foodName, String foodDescription, int cookingTime, double estimatedCost, String postedDate, int expirationTime
  //chiefId, foodTypeId,foodName, foodDescription, cookingTime, estimatedCost, postedDate, expirationTime
  return (
    <div className={style.mainPostContainer}>
      <h3 id="resultPostFood"></h3>
      <form onSubmit={handleSubmit}> 
                    <span id = "reset" onClick={() => handleReset()} >reset</span>
                    <input type="text" id ="foodName" name = "foodName"  placeholder="Enter food name (required)" required/>
                    <textarea type="text" id ="foodDescription" name = "foodDescripion"  placeholder="Enter food description (required)" required/>
                    <input type="number" id ="cookingTime" name = "cookingTime"  placeholder="Enter your estimate cooking time (required)" required/>
                    <input type="number" id ="estimatedCost" name = "estimatedCost"  placeholder="Enter your estimate cost "/>
                    <input type="date" id ="postedDate" name = "postedDate"  placeholder="Enter the date (required)" required/>
                    <input type="number" id ="expirationTime" name = "expirationTime"  placeholder="Enter experation time (in hour) (required )" required/>
                    <input type="text" id ="picture" name = "picture"  placeholder="Enter picture url" />
                    
                    <input type="hidden" id ="chiefId" name = "chiefId"  value={chiefId} />
                  
                    { loadingFoodType ? <h3>Loading ...</h3> :
                        <select id="foodTypeId" name="foodTypeId" required>
                            <option  disabled>Please Select (required)</option>
                        {foodTypes.map(foodType =>(
                            <option key={foodType.id} value={foodType.id}>{foodType.name}</option>
                        ))}
                        </select>
                    }
                    <input type="hidden" id ="up" name = "up"  value="0" />
                    <input type="hidden" id ="foodId" name = "foodId"  value="0" />
                    <button type = "submit" id = "foodSubmit">Post food</button>
                </form>
&
                <div> 
            { loadingFood ? <h3>Loading ...</h3> :
                <>
                    <h3>All your posted food</h3>
                    <table>
                      <tbody>
                        <tr>
                          <th>foodName</th>
                          <th>foodDescription</th>
                          <th>foodType</th>
                          <th></th><th></th><th></th>
                        </tr>
                        {foods.map(food =>(
                        <tr key={food.id}>
                          <td>{food.foodName}</td>
                          <td className={style.fixLenght}>{food.foodDescription}</td>
                          <td> {food.foodType.name}</td>
                          <td style={{width:"120px"}} ><img src={food.picture} title={food.foodName} className={style.img}  /></td>
                          <td><button onClick={() => handlePreUpdate(food.id, food.chiefId, food.foodType, food.foodName,
                              food.foodDescription, food.cookingTime, food.estimatedCost, food.postedDate, 
                              food.expirationTime, food.picture)}>up</button></td>
                          <td><button onClick={() => handleDelete(food.id, food.foodName)}>x</button></td>
                        </tr>
                        ))}
                      </tbody>
                    </table>
                    
                </>   
             }
            </div>
        <div className={style.headPosition}>
            <div className={style.userInfoPortion}>
                <div className={style.userAvatar}><Avatar src=""></Avatar></div>
                <div className={style.userInfoDetail}>
                    <div className={style.userName}>User Name</div>
                    <div className={style.postCreationDate}> # days ago</div>
                </div>
            </div>
            <div className={style.postDescripPortion}></div>
        </div>
        <div className={style.bodyPosition}>
          {/* <img src='' alt=''></img> */}
        </div>
        <hr className={style.hrPost}/>
        <div className={style.footerPosition}>
          <div className={style.comment}>Comments</div>
        </div>

    </div>
  );
}

export default Post;