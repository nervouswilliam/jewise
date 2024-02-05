import React from 'react'
import Navbar from './Navbar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/homePage";
import About from "./pages/aboutPage";
import Contact from "./pages/contactPage";
import Experience from "./pages/experiencePage";
import Portfolio from "./pages/portfolioPage";
import "./App.css";

//rafce
const App = () => {
  return (
      <div className='container'>
        <Navbar/>
        <Routes>
          <Route path = "/" element = {<Home/>} />
          <Route path = "/about" element = {<About/>} />
          <Route path = "/portfolio" element = {<Portfolio/>} />
          <Route path = "/experience" element = {<Experience/>} />
          <Route path = "/contact" element = {<Contact/>} />
        </Routes>
      </div>
  )
}

export default App
