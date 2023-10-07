import React, { useState } from "react";
import "./App.css";
import{Radio} from "@material-ui/core";
function App(){
    const testfunction=()=>{
      alert("gender")

    }
  return (
    <>
      <h1> React Material UI Radio Button </h1>
      <div>
        <Radio color="primary" value="Male"
        onChange={(testfunction)} />
        <span> Male </span>
      </div>
      <div>
        <Radio color="secondary" value="Female"/>
        <span> Female </span>

      </div>
    </>
  );
  }


export default App;
