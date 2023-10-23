import './App.css'
import Todolist from './Todolist'
import { useState } from "react";
import { Tabs } from "@mui/material";
import { Tab } from "@mui/material";
import Home from "./components/Home";

export default function App() {

  const [value, setValue] = useState('Home');

  const handleChange = (event, value) => {
    setValue(value);
  }

  return (
    <>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Home" value="Home"></Tab>
        <Tab label="Todos" value="Todos"></Tab>
      </Tabs>
      {value === "Home" && <Home />}
      {value === "Todos" && <Todolist />}
    </>

  )
}

