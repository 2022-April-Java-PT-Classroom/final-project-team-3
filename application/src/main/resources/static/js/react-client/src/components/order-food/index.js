import React, {useEffect, useState} from 'react';

import Axios from 'axios';
import style from './style.module.scss';
import Popup from '../popup';
import StringScreen from '../string-screen';
//import style from '../all-posts/module.style.scss';

const OrderFood = ({food}) => {
  var userId = 0; 
  let foodView = "none";
  let refresh = false;
  var resObj={firstName:"", lastName:""};
  if(localStorage.getItem("token")!=""){
  resObj = JSON.parse(localStorage.getItem("token"));
  userId= resObj.userId; //console.log(chiefId);  
  //resObj = 
  }

  const [userState, setUserState] = useState({
    firstName :"",
    lastName : "",
    email : "",
    phone : "",
    address : ""
    
});
 
const handleChange = (e) => {
  const value = e.target.value;
  setUserState({
      ...userState,
      [e.target.name]: value
  });
};


const handleReset =() => {
 // const lance = async () => {
  document.querySelector("#firstName").value = ""; 
  document.querySelector("#lastName").value = "";
  document.querySelector("#email").value = "";
  document.querySelector("#phone").value = "";
    
  document.querySelector("#address").value = ""
  document.querySelector("#up").value = "0";
  document.querySelector("#userId").value = "0";
 // }
  //const timer = setTimeout(() =>{lance();},20);

}



  //Long chiefId, Long foodTypeId, String foodName, String foodDescription, int cookingTime, double estimatedCost, String postedDate, int expirationTime
  let separator = "-";
  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
        
  let orderedDate = `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date<10?`0${date}`:`${date}`}`;
  
  
  const handleSubmit = (e) => {
    e.preventDefault();  
    let userData=null; 
    if(userId ==0){
    
    userData = {  
      firstName: userState.firstName, 
      lastName: userState.lastName,
      email: userState.email,
      phone:  userState.phone,
      avatar: "",
      description : "",
      password: "0000",
      roleId: "1",
      address: userState.address
    }; 
  } 
  localStorage.setItem("oneGuestId","");
    if(userId==0) {
    Axios.post('http://localhost:8080/api/user/signup-new', userData).then((response) => {
                console.log(response.status); 
                console.log('DATA', response.data);
                setTimeout(()=>{localStorage.setItem("oneGuestId", response.data.id);},10); 
                //setTimeout(()=>{ alert("ici1 = "+localStorage.getItem("oneGuestId"));},0); 
                console.log(response.data);
               
      }).catch((err) => {
         console.log("Erreur:" + err);
      });

      //setTimeout(alert("ici2 = "+localStorage.getItem("oneGuestId")),2000);
      setTimeout(()=>{userId = localStorage.getItem("oneGuestId"); /*alert("ici3 = "+userId);*/},1000);

      setTimeout(insertFood,2000);
      
    } else {

     insertFood();

    }    
        //window.location.reload();

   function insertFood(){

    const foodData ={
      guestId: userId, 
      orderedDate: orderedDate
    }
    
     //setTimeout(alert(localStorage.getItem("oneGuestId")),25);

    Axios.put(`http://localhost:8080/api/food/${food.id}/order-food-guest`, foodData).then((response) => {
              console.log(response.status); 
              console.log('DATA', response.data); 
              console.log(response.data);
              //setUserState(response.data);
              //handleReset();
              refresh = true;
              document.querySelector("#foodView").style.display = "block";
              document.querySelector("#userForm").style.display = "none";
              document.querySelector("#resultOrder").innerHTML = "Thank you! Your food order " + response.data + " was Sent";
              //setTimeout(window.location.reload(), 5000);
    });
   }


    
};






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

const togglePopupRefresh = () => {
  setIsOpen(!isOpen);
  if(refresh == true )setTimeout(window.location.reload(), 1000);
}
  
    
  //Long chiefId, Long foodTypeId, String foodName, String foodDescription, int cookingTime, double estimatedCost, String postedDate, int expirationTime
  //chiefId, foodTypeId,foodName, foodDescription, cookingTime, estimatedCost, postedDate, expirationTime
  return (
    <div>
      
      <button onClick={togglePopup} className={style.button}>Order this food</button>            
      {isOpen && <Popup
        content={<>
          <b>Order this food</b>
          <h3 id="resultOrder"></h3>
          <div style={{width:"110px", display:"none"}} id="foodView">{food.foodName}<img src={food.picture} width="100" /></div>
          <div className={style.user} id="userForm">
            <form onSubmit={handleSubmit}> 
            {userId!=0?<>
            <div style={{width:"110px"}}>Hi! {resObj.firstName} {resObj.lastName}</div>
            <input onChange={handleChange} type="hidden" id ="firstName" name = "firstName"  placeholder="Enter first name (required)" required/>
              <input onChange={handleChange} type="hidden" id ="lastName" name = "lastName"  placeholder="Enter last name (required)" required/>
              <input onChange={handleChange} type="hidden" id ="phone" name = "phone"  placeholder="Enter you phone number (required)" required/>
              <input onChange={handleChange} type="hidden" id ="email" name = "email"  placeholder="Enter your email (required)" required/>
              <input onChange={handleChange} type="hidden" id ="address" name = "address"  placeholder="Enter your address (required)" required/>
            
            </>:
              <>
              <span onChange={handleChange} id = "reset" onClick={() => handleReset()} >reset</span>
              <input onChange={handleChange} type="text" id ="firstName" name = "firstName"  placeholder="Enter first name (required)" required/>
              <input onChange={handleChange} type="text" id ="lastName" name = "lastName"  placeholder="Enter last name (required)" required/>
              <input onChange={handleChange} type="phone" id ="phone" name = "phone"  placeholder="Enter you phone number (required)" required/>
              <input onChange={handleChange} type="email" id ="email" name = "email"  placeholder="Enter your email (required)" required/>
              <textarea onChange={handleChange} id ="address" name = "address"  placeholder="Enter your address (required)" required/>
              
              </>
              }  
              <input onChange={handleChange} type="hidden" id ="up" name = "up"  value="0" />
              <input onChange={handleChange} type="hidden" id ="userId" name = "userId"  value="0" />
              <input onChange={handleChange} type="hidden" id ="roleId" name = "roleId"  value="1" />
              <div style={{width:"110px"}}>{food.foodName}<img src={food.picture} width="100" /></div>
              <button type = "submit" id = "userSubmit" className={style.submitfood}>Order the food</button>
            </form>
          </div>
         
        </>}
        handleClose={togglePopupRefresh}
      />}
               
        
        
    

    </div>
  );
}

export default OrderFood;