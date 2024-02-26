import { useState } from 'react'
import './App.css'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from './components/Navbar';

import Home from './pages/Home';
import Demo from './pages/Demo';
import Demo2 from './pages/Demo2';
import Demo3 from './pages/Demo3';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/home'element={<Home />} />
        <Route path='/demo' element={<Demo />} />
        <Route path='/demo2' element={<Demo2 />} />
        <Route path="/demo3" element={<Demo3 />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
