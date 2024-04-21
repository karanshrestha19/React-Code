import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Services from "./components/Services/Services";
import Details from "./components/Details/Details";
import AddItems from "./components/AddItems/AddItems";
import Skill from "./components/Skills/Skill";


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/aboutus" element={<About />}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/details/:id" element={<Details />}/>
        <Route path="/additems" element={<AddItems />}/>
        <Route path="/myskill" element={<Skill/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
