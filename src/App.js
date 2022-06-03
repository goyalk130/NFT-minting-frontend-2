import './App.css';
import Header from "./components/header/header"
import FirstBlock from "./components/firstblock/firstblock"
import React, { useEffect, useState } from 'react';
import SecondBlock from './components/secondblock/secondblock';
import ThirdBlock from './components/thirdblock/thirdblock';
import FourthBlock from './components/fourthblock/fourthblock';
import FifthBlock from './components/fifthblock/fifthblock';

function App() {

  
  
  return (<div><div className='header-first-wrapper'>
    <Header/>
    <FirstBlock/>
  </div>
    
    <SecondBlock/>
    <ThirdBlock/>
    <FourthBlock />
    <FifthBlock/>    
  </div>);
}

export default App;
