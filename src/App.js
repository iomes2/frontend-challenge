import React from "react";
import styled from "styled-components";
import global from "./global.css";
import { Header } from "./components/header/Header";
import { Progress, ProgressBar } from "./components/ProgressBar/Progress";
import { Filters } from "./components/Filters/Filters";

const SMain = styled.main`
  display: inline-block;
  margin: auto;
  width: 800px;
  height: 650px;
  background-color: #ffffff;
  padding: 50px;
`
const App = () => {
  return (
    <SMain>
      <Header/>
      <Progress/>
      <Filters/>
    </SMain>
  )
};

export default App;
