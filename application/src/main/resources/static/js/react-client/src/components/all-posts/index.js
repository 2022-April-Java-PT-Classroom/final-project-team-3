import React, {useEffect, useState} from 'react';

import Axios from 'axios';
import style from './style.module.scss';
import Popup from '../popup';
import OrderFood from '../order-food';
import StringScreen from '../string-screen';
//import style from '../all-posts/module.style.scss';

const AllPost = () => {

  var chiefId = 0; 
  if(localStorage.getItem("token")!=""){
  const resObj = JSON.parse(localStorage.getItem("token"));
  //chiefId= resObj.userId; console.log(chiefId);  
  }

  const [userState, setUserState] = useState({
    userName :"",
    description : ""
});
const xup = document.querySelector("#up"),
    xuserId = document.querySelector("#userId"),
    xfirstName = document.querySelector("#firstName"),
    xlastName = document.querySelector("#lastName") ,
    xemail = document.querySelector("#email") ,
    xphone = document.querySelector("#phone") ,
    xavatar = document.querySelector("#avatar") ,
    xdescription = document.querySelector("#description") ,
    xpassword = document.querySelector("#password") ,
    xroleId = document.querySelector("#roleId") ,
    xuserSubmit =  document.querySelector("#userSubmit") ;

    

const handleReset =() => {
   // var z =""; var i=0;
    xfirstName.value = "";
    xlastName.value = "";
    xemail.value = "";
    xphone.value = "";
    xavatar.value = "";
    xdescription.value = "";
    xpassword.value = "";
   
    xup.value = "0";
    xuserId.value = "0";
    xuserSubmit.innerText = "Add User"; 

    // for (const o of xroleId.options) {
    //     o.selected = false; //alert("Clean");
    // }
}

const [loadingRole, setLoadingRole] = useState(true),
    [roles, setRoles] = useState(null);

    useEffect(() => {
        const fetchData = async () =>{
            const result = await Axios('http://localhost:8080/api/role/no-admin');
            setRoles(result.data);
        }

        if(roles){
            setLoadingRole(false);
        }

        const timer = setTimeout(() => {
            !roles && fetchData(); 
        }, 1000);

        return () => clearTimeout(timer);

    },[roles]);

  //Long chiefId, Long foodTypeId, String foodName, String foodDescription, int cookingTime, double estimatedCost, String postedDate, int expirationTime
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    
  //   if(xup.value=="0" && xfoodId.value=="0"){  
  //       Axios.post('http://localhost:8080/api/food/post-food-chief', userData).then((response) => { 
  //           console.log(response.status);
  //           console.log('DATA', response.data);
  //          // setFoodsState(response.data);
  //           handleReset();
  //           document.querySelector("#resultPostFood").innerHTML = "Thank you! Your food " + response.data + " Send";
  //       });

  //       window.location.reload();
  //   } 

  //   if(xup.value=="up" && xfoodId.value>=0){
  //     Axios.put(`http://localhost:8080/api/food/${xfoodId.value}/update-food`, userData).then((response) => {
  //         console.log('Update successful');
  //         console.log('DATA', response.data);

  //         //setFoodsState(response.data);
  //     });
  //     window.location.reload();
  // }

    
};



const handleOrder = (foodId) => {

}

const [loadingFood, setLoadingFood] = useState(true),
[foods, setFoods] = useState(null);

useEffect(() => {
    const fetchData = async () =>{
        const result = await Axios(`http://localhost:8080/api/food`);
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


const [isOpen, setIsOpen] = useState(false);
 
const togglePopup = () => {
  setIsOpen(!isOpen);
}
   
    
  //Long chiefId, Long foodTypeId, String foodName, String foodDescription, int cookingTime, double estimatedCost, String postedDate, int expirationTime
  //chiefId, foodTypeId,foodName, foodDescription, cookingTime, estimatedCost, postedDate, expirationTime
  return (
    <div className={style.mainPostContainer} >
      <h3 id="resultPostFood"></h3>
      
          <div> 
            { loadingFood ? <h3>Loading ...</h3> :
                <>
                    <h3>Current posted foods</h3>
                    <div className={style.container}>
                      {foods.map(food =>(
                        <>
                        {food.orderedDate!=null ? <></> :
                        <div className = {style.item}>
                          <div style={{width:"100%", height:"250px", background: `url(${food.picture}) no-repeat`, backgroundSize:"500px",  backgroundPosition:'middle'}} title={food.foodName}></div>
                          <div >{food.foodName} - [{food.foodType.name}]<br/>[{food.postedDate}] <span id="expirationTime">{food.expirationTime}</span>hs</div>
                          <div className={style.foodDescription}>{food.foodDescription}</div>
                          <OrderFood food={food} />
                          {/* <div><button onClick={() => handleOrder(food.id, food.foodName)} className={style.foodOrder}>Order this food</button></div> */}
                        </div>
                        }
                        </>
                      ))}
                    </div>
                    
                    
                </>   
              }
        </div>
        
    

    </div>
  );
}

export default AllPost;