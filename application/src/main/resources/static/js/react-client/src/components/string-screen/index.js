import React from "react";
import style from './style.module.scss';

const StringScreen = (strToFixe) => {
    var str = strToFixe;
    str.replace(/'/g, '&lsquo;');
    str.replace(/"/g, '&quot;');
    str.replace(/\(/g, '&lang;');
    str.replace(/\)/g, '&rang;');

    return str;
}

export default  StringScreen;