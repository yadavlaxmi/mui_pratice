import React, { useState } from "react";
import "./App.css";
import {Container} from "@material-ui/core"
function App(){

  
    
  return (
    <div>
    <Container  style={{backgroundColor:"skyblue"}} maxWidth="lg">  
    <h1>  React material UI container layout</h1>
    </Container>
    <Container  style={{backgroundColor:"skyblue"}} maxWidth="md">  
    <h1>  React material UI container layout</h1>
    </Container>
    <Container  style={{backgroundColor:"skyblue"}} maxWidth="sm">  
    <h1>  React material UI container layout</h1>
    </Container>
    <Container  style={{backgroundColor:"skyblue"}} maxWidth="xs">  
    <h1>  React material UI container layout</h1>
    </Container>
    <Container fixed style={{backgroundColor:"skyblue"}}>  
    <h1>  React material UI container layout</h1>
    </Container>
   
    
    
   
  
    
    </div>
  );
  }


export default App;
