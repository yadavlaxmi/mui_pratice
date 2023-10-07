import React, { useState } from "react";
import "./App.css";
import{Radio} from "@material-ui/core";
function App(){
  const[gender,setGender]=useState("male")
    const testfunction=(e)=>{
      console.warn(e.target.value)
      setGender(e.target.value)

    }
  return (
    <>
      <h1> React Material UI Radio Button </h1>
      <div>
        <Radio color="primary" value="male"
        checked={gender==="male"}
        onChange={(testfunction)} />
        <span> Male </span>
      </div>
      <div>
        <Radio color="secondary" 
        value="female" checked={gender==="female"}

        onChange={(testfunction)}/>
        <span> Female </span>

      </div>
      <div>
        <Radio color="default" 
        value="other" checked={gender==="other"}

        onChange={(testfunction)}/>
        <span> other </span>

      </div>
    </>
  );
  }


export default App;
