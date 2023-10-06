import React,{useState} from "react";
import './App.css';
import {Button} from "@material-ui/core"

function App() {
    const[color,setColor]=useState("primary")
  
function customeMe(){
    setColor("secondary")
}
  return (
    <>
    <Button 
    variant="outlined" 
    color={color} 
    onClick={()=>{customeMe()}}>
    click me</Button>
    

    </>
  );

}

export default App;
