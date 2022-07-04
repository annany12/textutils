
//import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, {useState} from 'react'
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
// } from "react-router-dom";




function App() {
  const [mode , setMode]=useState('light')

  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },3000);
    
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor= '#03386c'
      showAlert("Dark mode has been enabled","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled","success")

    }
  }
  return (
    <>
    {/* <Router> */}
    
      <Navbar title="Textutils"  aboutText="About Textutils"  mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
    {/* \    <Routes> */}
            {/* <Route exact path="/about" element={<About />}> */}
            {/* </Route> */}
            {/* <Route exact path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}> */}
            {/* </Route> */}
          {/* </Routes> */}
          <TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />
      
       
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
