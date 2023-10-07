import React, { useState } from "react";
import "./App.css";
import {Slider} from "@material-ui/core"
function App(){
    const[val,setVal]=useState([40,100])
     const updateVal=(e,item)=>{
      setVal(item)
     }
  return (
    <div className="App">
    <h1> Slider</h1>
    <div style={{width:300,margin:30}}> 
    <Slider value={val}
    max={200}
    step={10}
    onChange={updateVal}
    valueLabelDisplay="auto"/>
    </div>
    
  
    
    </div>
  );
  }


export default App;
