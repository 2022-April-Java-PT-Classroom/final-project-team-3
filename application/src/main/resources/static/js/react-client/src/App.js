import React, { createContext, useState } from 'react';

import AppRouter from './components/app-router';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';
import style from './style.module.scss';

function App() {

  return (

        <BrowserRouter>
          <Header />
          <div className={style.App}>
            <AppRouter />
          </div>  
          <Footer />  
        </BrowserRouter>
   
  ); 
}
export default App;
