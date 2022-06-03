import React from "react";
// import Web3 from 'web3';
// import { ABI } from "../abi/abi";

export default  function Header(props){
  
  
  return (
    <div className="main-header">
      <div className="inner-header">
        <div className="name-logo">Anime</div>
        <ul type="none" className="nav-bar-list">
          <li key={1}><a href="#root">Home</a></li> 
          <li key={2}><a href="#root">NFTs</a></li> 
          <li key={3}><a href="#root">Roadmap</a></li> 
          <li key={4}><a href="#root">About us</a></li>
          <li key={5}><button >Connect</button></li>
        </ul>
      </div>
    </div>
  );
}
