import React, {useEffect, useState} from 'react';

import Axios from 'axios';
import style from './style.module.scss';

//import { useState } from 'react';

const AllFoodPosted = () => { 
 
  //localStorage.removeItem("token"); localStorage.setItem("token","");
  var chiefId = 0; 
  if(localStorage.getItem("token")!=""){   
      const resObj = JSON.parse(localStorage.getItem("token")); 
      chiefId = resObj.userId; 

  } 
  setTimeout(() =>{if(document.querySelector("#operatingFood"))document.querySelector("#operatingFood").style.display = "none";},20);


  const [loadingFood, setLoadingFood] = useState(true),
  [foods, setFoods] = useState(null);
  
  useEffect(() => {   
      const fetchData = async () =>{ 
          const result = await Axios(`http://localhost:8080/api/food/`);  
          setFoods(result.data);
          console.log(result.data);
  
      }
      
      if(foods){
        setLoadingFood(false);
      }
  
      const timer = setTimeout(() => {
          !foods && fetchData(); 
      }, 100);
  
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
      if(localStorage.getItem("roleId")){
      let roless = localStorage.getItem("roleId"); //alert(roless);
      let roleA = roless.split(","); 
      let roleAId = 0, showForm = "none"; 
      for(let i=0; i< roleA.length; i++)if(roleA[i]==3){ 
        roleAId = roleA[i]; 
        showForm = "block";
      }
    }
    let separator = "-";
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
          
    let deliveryDate = `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date<10?`0${date}`:`${date}`}`;
  
      const handleDelivery =(foodId, foodName, userId, guestId) => { 
       //deliverymanId, deliveryDate, deliveryTime, estimatedDeliveryCost, deliveredDate
        let deliveryData = {
          deliverymanId: userId,  
          deliveryDate: deliveryDate, 
          deliveryTime: 1, 
          estimatedDeliveryCost: 5.0, 
          deliveredDate: ""
        };  
       
        const fetchData = async () =>{   if(guestId==0) guestId = 5; // sent to the 0 User.
          const result =  await Axios(`http://localhost:8080/api/user/${guestId}`);  
          //alert(result.data.address1); 
          if(window.confirm(`Can you deliver thisfood[${foodName}] within 1 hour to this address: ${result.data.address1} ?`)){ 
            Axios.put(`http://localhost:8080/api/food/${foodId}/delivery-food-deliveryman`, deliveryData).then((response) => {
                console.log('Update successful');
                console.log('DATA', response.data);
                setTimeout(window.location.reload(),1000);
                
            });
          } 
      }
        
      setTimeout(fetchData,1000);
      //setTimeout(window.location.reload(),1000);//
      }
      
    const handleDeliveryDone =(foodId, foodName) =>{
  
      const deliveryData = {
        deliveredDate: deliveryDate
      }
  
      ///api/food/{id}/food-delivered
      if(window.confirm(`Did you definitively deliver food : ${foodName} ? - ${deliveryDate}`)){
        Axios.put(`http://localhost:8080/api/food/${foodId}/food-delivered`, deliveryData).then((response) => {
           
            console.log('DATA', response.data);
            console.log(response.data);
            setTimeout(window.location.reload(),1000);//
  
        });
      } 
  
    }

  
   
    return (
        <div style={{margin:"40px auto", maxWidth:"792px"}}>
           

           <div id="operatingFood"> 
            { loadingFood ? <h3>Loading ...</h3> :
                <>
                    <h3>All posted food</h3>
                    <table>
                      <tbody>
                        
                        {foods.map(food =>(
                        <tr key={food.id}>
                          <td>{food.foodName}</td>
                          {/* <td><div className={style.fixLenght}>{food.foodDescription}</div></td> */}
                          <td> {food.foodType.name}</td>
                          <td ><img src={food.picture} title={food.foodName} className={style.img}  /></td>
                          
                          
                          { food.orderedDate==null?<></>:
                          <>
                            <td >&nbsp;&nbsp;</td>
                            <td>
                              {food.deliveryDate==null?
                              <button onClick={() => handleDelivery(food.id, food.foodName, chiefId, food.guestId)} title={`${food.id}`}>&nbsp;Pick for delivery&nbsp;</button>
                              :
                              <div>
                               { food.deliveredDate=="" || null?
                                <div> Was Picked <button onClick={() => handleDeliveryDone(food.id, food.foodName)}>&nbsp;Delivered&nbsp;</button></div>
                                :
                                <div> DELIVERED </div>
                              }
                              </div>
                              }
                            </td>
                          </>}
                        </tr>
                        ))}
                      </tbody>
                    </table>
                   
                </>   
              }
        </div>

        </div>
     
    );
   
   
}

export default AllFoodPosted;