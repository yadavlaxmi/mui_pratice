import React,{useState} from "react";
import './App.css';
import {Button} from "@material-ui/core"

function App() {
    const[color,setColor]=useState("primary")
  
function customeMe(){
    alert("fuction called")
  }
  return (
    <>
    <Button variant="outlined" color={color} disabled onClick={()=>{customeMe()}}>click me</Button>
    

    </>
  );
}

export default App;
