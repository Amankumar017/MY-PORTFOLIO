import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toast";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Projects from "./components/Projects";
import ContactPage from "./components/ContactPage";
import ProjectCard from "./components/common/ProjectCard";
import { useState } from "react";

// magic color "#00EEFF"

function App() {

  return (
    <div className="w-screen min-h-screen bg-richblue-900 flex font-inter">
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path= "/work" element={<Projects />} />
          <Route path= "/work/:id" element={<ProjectCard />} />
          <Route path= "/contact" element={<ContactPage />} />
        </Route>
        
      </Routes>
      

      <ToastContainer delay={2000} position="bottom-right" />
    </div>
  );
}

export default App;
