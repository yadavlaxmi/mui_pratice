import React, { useState } from "react";
import "./App.css";
import {Tab,Tabs,AppBar} from "@material-ui/core"
function App(){
  const[value,setValue]=React.useState(0)
  const handleTabs=(e,val)=>{
    console.warn(val)
    setValue(val)
  }
  
    
  return (
    <div>
      <h1> React material ui</h1>
      <AppBar position="static">
        <Tabs value={value} onChange={handleTabs}>
          <Tab label="item 1"/>
          <Tab label="item 2"/>
          <Tab label="item 3"/>
          <Tab label="item 4"/>
        
          
          

        </Tabs>
      </AppBar>
    </div>
  
  );
  } 


export default App;
