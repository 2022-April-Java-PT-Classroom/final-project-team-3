import React, { useState } from "react";

import style from './style.module.scss';

const ContactScreen = () => {
    

    return (
        <div className={style.feedback}>
            <div className={style.message}>
                <h2><span>We appreciate any feedback. Please, share your thoughts with us!</span></h2><br></br><br></br>
                <h3><a href="mailto:communitywcci@gmail.com">Email-Us</a></h3><br></br>
                <div>☎: +1 555 555 5555</div>
            </div>
        
        </div>
        );
}

export default ContactScreen;