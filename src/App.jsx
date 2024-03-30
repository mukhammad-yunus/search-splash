import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="font-custom relative mt-4 px-4 max-w-[1280px] mx-auto">
      <Navbar />
      <Home />
      <div className=" h-28"></div>
    </div>
  );
};

export default App;
