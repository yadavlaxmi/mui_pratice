import React, { useState } from "react";
import "./App.css";
import { ButtonGroup,Button } from "@material-ui/core";
function App(){
  return (
    <>
      <ButtonGroup orientation="vertical" variant="outlined" color="primary">
      <Button>one</Button>
      <Button>two</Button>
      <Button>three</Button>
      </ButtonGroup>
    </>
  );
  }


export default App;
