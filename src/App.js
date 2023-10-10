import React, { useState } from "react";
import "./App.css";
import { Tab, Tabs, AppBar } from "@material-ui/core";

export default function App() {
  const [value, setValue] = React.useState(0);

  const handleTabs = (e, val) => {
    console.warn(val);
    setValue(val); // You forgot to set the value here
  };

  return (
    <div>
      <h1>React Material UI</h1>
      <AppBar position="static">
        <Tabs value={value} onChange={handleTabs}>
          <Tab label="Item 1" />
          <Tab label="Item 2" />
          <Tab label="Item 3" />
          <Tab label="Item 4" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Item one detail
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item two detail
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item three detail
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item four detail
      </TabPanel>
    </div>
  );
}

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div>
      {value === index && (
        <div>
          <h1> {children}</h1>
          
        </div>
      )}
    </div>
  );
}
