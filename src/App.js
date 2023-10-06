import React from "react";
import './App.css';
import {Button} from "@material-ui/core"

function App() {
  
const customeMe=()=>{
    alert("fuction called")
  }
  return (
    <>
    <Button variant="contained" color="primary" onClick={()=>{customeMe()}}>click me</Button>
    

    </>
  );
}

export default App;
