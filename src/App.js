import React, { useState } from "react";
import "./App.css";
import {Grid} from "@material-ui/core"
function App(){

  
    
  return (
   <Grid item xs={12} container spacing={1}>
    <Grid item lg={3} sm={6} xs={12}><h1 style={{background:"green"}}>block1</h1></Grid>
    <Grid item lg={3} sm={6} xs={12}><h1 style={{background:"green"}}>block2</h1></Grid>
    <Grid item lg={3} sm={6} xs={12}><h1 style={{background:"green"}}>block3</h1></Grid>
    <Grid item lg={3} sm={6} xs={12}><h1 style={{background:"green"}}>block4</h1></Grid>


   </Grid>
  );
  }


export default App;
