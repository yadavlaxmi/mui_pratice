import React, { useState } from "react";
import "./App.css";
import {Slider} from "@material-ui/core"
function App(){
          const mark=[{
            value:0,
            label:"start"
          },
          {
            value:100,
            label:"middle"

          },
          {

            value:30,
            label:"at 30"
          },
          {

            value:200,
            label:"end"
          }
        ]
            
  return (
    <div className="App">
    <h1> Slider</h1>
    <div style={{width:300,margin:40}}>
      <Slider color="primary" 
      defaultValue={100} 
      max={200} 
      step={10}
       marks={mark}
      />
      </div>
    
    </div>
  );
  }


export default App;
