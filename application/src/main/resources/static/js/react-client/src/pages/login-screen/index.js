import React, {createElement, useEffect, useState} from 'react';

import Axios from 'axios';
import style from './style.module.scss';

//import { useState } from 'react';

const Login = () => {

     const [loading, setLoading] = useState(true);
    //
     var chiefId = 0; 
    if(localStorage.getItem("token")!=""){
 
        const resObj = JSON.parse(localStorage.getItem("token")); 
        chiefId = resObj.userId; 
        
            const lance = async () => { 
            document.querySelector("#formLogin").style.display = "none"; 
            document.querySelector("#logout").style.display = "block";
            const  xaccount = document.querySelector("#account") ; 
            xaccount.style.fontSize = "12px";
            xaccount.style.fontWeight = "600";
            xaccount.textContent = "Hi, "+resObj.firstName; 
        }
        const timer = setTimeout(() =>{lance();},20);
    } else 
    setTimeout(() =>{document.querySelector("#operatingFood").style.display = "none";},20);

    const handleLogout = ()=>{
        //localStorage.removeItem("token"); alert(1);
        localStorage.setItem("token","");
        document.querySelector("#logout").style.display = "none";
        //document.querySelector("#formLogin").style.display = "block";
        document.querySelector("#formLogin").style.display = "flex";
        document.querySelector("#account").textContent = "Login";
        document.querySelector("#account").style.fontSize = "";
        document.querySelector("#account").style.fontWeight = "";
        localStorage.setItem("roleId","");
        document.querySelector("#operatingFood").style.display = "none";
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const xemail = document.querySelector("#email") ,
        xpassword = document.querySelector("#password") ,
        xaccount = document.querySelector("#account") ;
        const userData = {
            
            email: xemail.value,
            password: xpassword.value,
    
        }; 
        
            
            Axios.post('http://localhost:8080/api/user/login', userData).then((response) => {
                console.log("Status",response.status);
                console.log('DATA', response.data);
                //setUserState(response.data);
               if(response.data.email){
                    const tokenObj = {
                        firstName: response.data.firstName,
                        lastName: response.data.lastName,
                        email: response.data.email,
                        userId: response.data.userId,
                        roles: response.data.roles
                    }; 
                localStorage.setItem("token", JSON.stringify(tokenObj)); 
                
                const resObj = JSON.parse(localStorage.getItem("token"));
                
                xaccount.style.fontSize = "12px";
                xaccount.style.fontWeight = "600";
                xaccount.textContent = "Hi, "+resObj.firstName; 
                
                let role ="";
                for(let i=0; i < response.data.roles.length; i++){if(i>0)role +=","; role +=response.data.roles[i].id; }
                localStorage.setItem("roleId", role); 

                xemail.value = "";
                xpassword.value = ""; 

                document.querySelector("#formLogin").style.display = "none";
                document.querySelector("#logout").style.display = "block";
               document.querySelector("#operatingFood").style.display = "block";

                console.log(JSON.parse(resObj));
                //window.location.replace("/");
            }
            }).catch(function (err) {
                console.log("Incorrect email or password " + err.message);
                //console.log("Incorrect email or password ");
              }); 
   
    }
///////////////////////////////////////////////////////

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
    
    let roless = localStorage.getItem("roleId"); //alert(roless);
    let roleA = roless.split(","); 
    let roleAId = 0, showForm = "none"; 
    for(let i=0; i< roleA.length; i++)if(roleA[i]==3){ 
      roleAId = roleA[i]; 
      showForm = "block";
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
     
      const fetchData = async () =>{  
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
            { //loading ? <h3>Loading ...</h3> :
            <>
                <button onClick={() => handleLogout()} id="logout" className={style.logout}>Logout</button>
                <form onSubmit={handleSubmit} id="formLogin">
                    <input type="email" id="email" name ="email"  placeholder='Enter your email' required/>
                    <input type="password" name="password" id="password" placeholder="Enter password"required/>
                
                <button type="submit"> Submit</button> <div>Don't have a account, please <a href="/signup">signup</a></div>   
                </form>
            </>   
            }

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

export default Login;