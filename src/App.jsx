import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="font-custom relative mt-4 px-4 max-w-[1280px] mx-auto">
      <Navbar />
      <Outlet/>
      <div className=" h-28"></div>
    </div>
  );
};

export default App;
