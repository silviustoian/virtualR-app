import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export const App = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Hero />
      </div>
    </div>
  );
};

export default App;
