import React, { useState } from "react";
import "./App.css";
import {Grid,Hidden} from "@material-ui/core"
function App(){

  
    
  return (
   <Grid  container spacing={2} xs={12}>
    <Grid item lg={3}  sm={6} xs={12}><h1 style={{backgroundColor:"green"}}>BLOCK 1</h1></Grid>
    <Grid item lg={3} sm={6} xs={12}><h1 style={{backgroundColor:"green"}}>BLOCK 2</h1></Grid>
    <Hidden only="sm"><h1 style={{backgroundColor:"green",flex:1}}>BLOCK3</h1></Hidden>
    <Grid item lg={3} sm={6} xs={12}><h1 style={{backgroundColor:"green"}}>BLOCK4</h1></Grid>

   </Grid>
  );
  } 


export default App;
