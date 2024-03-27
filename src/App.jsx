import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="font-sans relative mt-4 px-4 max-w-[1280px] mx-auto">
      <Navbar />
      <div className=" h-28"></div>
      <Home />
    </div>
  );
};

export default App;
