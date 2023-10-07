import React, { useState } from "react";
import "./App.css";
import Checkbox from "@material-ui/core/Checkbox"
function App(){
  function getValue(e)
  {
    console.warn(e.target.value)
  }

  return (
    <>
      <h1> my checkbox</h1>
      <Checkbox color="primary" value="laxmi"onChange={(e)=>{getValue(e)}}/>
    </>
  );
  }


export default App;
