import React from "react";

import { Box } from "@chakra-ui/react";

import Board from './Components/Board';

import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Allroutes from "./Routes/Allroutes";


const App = () => {
  return (
    <>
    <Navbar/>
      <Allroutes />
      <Footer/>
    </>
  );
};

export default App;
