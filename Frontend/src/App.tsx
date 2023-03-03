import React from "react";
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
