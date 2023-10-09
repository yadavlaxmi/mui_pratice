import React, { useState } from "react";
import "./App.css";
import {Select,MenuItem} from "@material-ui/core"
function App(){
    const[course,setCourse]=React.useState("")
    const updateValue=(e,val)=>{
            console.warn(e.target.value)
            setCourse(e.target.value)
    }
  return (
    <div className="App">
    <h1> React material UI select box or select</h1>
    <Select 
    value={course} 
    displayEmpty 
    onChange={updateValue}>
        <MenuItem value="">Select Course</MenuItem>
        <MenuItem value={1}>React</MenuItem>
        <MenuItem value={2}>Node</MenuItem>
        <MenuItem value={3}>Javascript</MenuItem>
        <MenuItem value={4}>python</MenuItem>
    </Select>
    
  
    
    </div>
  );
  }


export default App;
