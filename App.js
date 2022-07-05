import React  from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import './App.css'
import About from "./pages/About";
import Register from "./pages/Register";
import Update from "./pages/Update";
import Search from "./pages/Search";

function App () {
    return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/update" element={<Update/>}/>
        <Route path="/search" element={<Search/>}/>
      </Routes>  
    );
}


export default App;
