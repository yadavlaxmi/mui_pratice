import React, { useState } from "react";
import "./App.css";
import { Button } from "@material-ui/core";
import Delete  from "@material-ui/icons/Delete";

function App() {
  const [color, setColor] = useState("primary");
  const [disableBtn, setDisableBtn] = useState(false);

  function customMe() {
    //setColor("secondary"); // Change the color to "secondary" when clicked
    setDisableBtn(true);
  }

  return (
    <>
      <Button
        variant="outlined"
        disabled={disableBtn}
        color={color}
        size="small"
        onClick={() => {
          customMe();
        }}
      endIcon={<Delete />}
      >
        click me
      </Button>
    </>
  );
}


export default App;
