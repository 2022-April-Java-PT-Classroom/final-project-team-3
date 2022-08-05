import React from "react";
import style from './style.module.scss';

const ContactUs = () => {
    return(
        <div className={style.feedback}>
            Contact info
        <div className={style.message}>
            <h1><span>We appreciate any feedback. Please share your thoughts with us! </span></h1>
                <h3><a href="mailto:infocommunity2022@gmail.com">Email-Us</a></h3>
                <p>Or Call Tool Free :</p><br></br>
                <div>
                    <h3>: +1 555-555-5555</h3>
                </div>
        </div>
        </div>
    )


}
export default ContactUs;