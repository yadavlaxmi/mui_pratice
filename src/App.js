import React, { useState } from "react";
import "./App.css";
import {Box,Button} from "@material-ui/core"
function App(){

  
    
  return (
    <div className="App">
    <h1> React material UI Box</h1>
    <Box component="span" style={{color:"red"}}m={1000} p={20} clone>
    <Button> hello</Button>
    </Box>
   
    
    
   
  
    
    </div>
  );
  }


export default App;
