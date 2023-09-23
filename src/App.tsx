import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./scenes/navbar";
import Home from "./scenes/home";
import Contact from "./scenes/contact";
import Register from "./scenes/register";

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <ParentComponent />
      </div>
    </Router>
  );
};

const ParentComponent: React.FC = () => {
  return (
    <div className="content-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
