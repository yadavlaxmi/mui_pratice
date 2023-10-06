import React from "react";
import './App.css';
import {Button} from "@material-ui/core"

function App() {
  return (
    <>
    <Button variant="contained" color="primary" onClick={()=>alert("laxmi")}>my name laxmi</Button>
    <Button variant="outlined" color="secondary">my name </Button>
    <Button variant="contained" color="default">my </Button>

    </>
  );
}

export default App;
