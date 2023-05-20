import "./App.css";
import Analyzer from "./components/Analyzer";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";



function App() {

  const [mode, setMode] = useState('light')

  const toggleMode1 = ()=>{
      if(mode === 'light'){
        setMode('dark')
        document.body.style.backgroundColor = "black"
        document.body.style.color = "White"
      }
      else{
        setMode('light')
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"
      }
  }

  const toggleMode2 = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = "#0088b5"
      document.body.style.color = "White"
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
    }
}
  return (
    <div className="App">
        <Navbar title="UtilText" mode={mode} toggleMode1={toggleMode1} toggleMode2={toggleMode2} ></Navbar>
        <div className="container my-5">
          <Analyzer></Analyzer>
        </div>
    </div>
  );
}

export default App;
