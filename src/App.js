import React, { useState } from "react";
import "./App.css";
import{Favorite} from "@material-ui/icons";
import{FavoriteBorder} from "@material-ui/icons";

import Checkbox from "@material-ui/core/Checkbox";
function App(){
   const[name, setName]=useState([])
  function getValue(e)
  {
    let data=name;
    data.push(e.target.value)
    console.warn(data)
  }

  return (
    <>
      <h1> my checkbox</h1>
      <Checkbox color="primary" value="laxmi"onChange={(e)=>{getValue(e)}}/>
      <Checkbox color="secondary" value="Mansa"onChange={(e)=>{getValue(e)}}/>
      <Checkbox color="default" value="guddi"onChange={(e)=>{getValue(e)}}/>
      <Checkbox color="primary" value="xyz" indeterminate onChange={(e)=>{getValue(e)}}/>
      <Checkbox color="secondary"
       value="xyz"  onChange={(e)=>{getValue(e)}} 
       icon={<FavoriteBorder/>}
       checkedIcon={<Favorite/>}/>

    </>
  );
  }


export default App;
