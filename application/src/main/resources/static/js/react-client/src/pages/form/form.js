import React, { useRef } from "react";

import style from  './style.module.scss';

const FormPage = (props) => {

const firstNameInput = useRef();
const lastNameInput =useRef();
const emailInput = useRef();
const phoneInput =useRef();
const commentInput = useRef();

function submitController(event) {
    event.preventDefault();

    const enteredFirstName = firstNameInput.current.value;
    const enteredLastName = lastNameInput.current.value;
    const enteredemail = emailInput.current.value;
    const enteredPhone = phoneInput.current.value;
    const entereComment = commentInput.current.value;

    const contactData = {
        firstName: enteredFirstName,
        lastName: enteredFirstName,
        email: enteredemail,
        phone: enteredPhone,
        comment: entereComment,
    }
    console.log(contactData);
    props.onEnteringComment(contactData);
}


    return (
        <div>
         <form className={style.form} onSubmit={submitController}>
          <div className={style.control}>
           <label htmlFor='first-name'> First Name</label>
           <input type='text' required id='first-name' ref={firstNameInput}/>
          </div>
          <div className={style.control}>
           <label htmlFor='last-name'>Last Name </label>
           <input type='text' required id='last-name' ref={lastNameInput}/>
          </div>
          <div className={style.control}>
           <lable htmlFor='email'>Email</lable>
           <input type='email' required id='email' ref={emailInput} />
          </div>
          <div className={style.control}>
           <lable htmlFor='phone'>Phone Number</lable>
           <input type='tel' required id='phone' ref={phoneInput}/>
          </div >
          <div className={style.control}>
            <label htmlFor='description'>Comments</label>
            <textarea id='description' required row='5' ref={commentInput}></textarea>
          </div>
          <div className={style.actions}>
              <button>submit</button>
          </div>
         </form>
        </div>
    );
}
export default FormPage;