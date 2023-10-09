import React, { useState } from "react";
import "./App.css";
import {TextField} from "@material-ui/core"
function App(){
    
  return (
    <div className="App">
    <h1> React material UI Text Field</h1>
    <TextField
    label="enter name"
    color="secondary"
    variant="outlined"
    type=""/><br></br><br></br>
    <TextField
    label="enter father name"
    color="secondary"
    variant="outlined"
    type=""/><br></br><br></br>
    <TextField
    label="enter mother name"
    color="secondary"
    variant="outlined"
    type=""/><br></br><br></br>
    <TextField
    label="enter school name"
    color="secondary"
    variant="outlined"
    type=""/><br></br><br></br>
    <TextField
    label="enter age"
    color="secondary"
    variant="outlined"
    type="number"/><br></br><br></br>
     <TextField
    label="password"
    color="secondary"
    variant="outlined"
    type="password"/><br></br><br></br>
   
   <TextField
    label="phone number"
    color="secondary"
    variant="outlined"
    type=""/><br></br><br></br>
    
   
  
    
    </div>
  );
  }


export default App;
