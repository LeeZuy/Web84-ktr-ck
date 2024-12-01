import {React, useState } from 'react';
import Navbar from '../Components/nav/nav';
import Teachers from '../Components/teacher/teachers';
import TeacherPositions from '../Components/teacher-positions/TeacherPositions';
import './App.css'
import { Routes, Route, BrowserRouter } from "react-router-dom"

function App() {

  return (
  <div className="App">
       <BrowserRouter>
       <Navbar/>
       </BrowserRouter>
   </div>
  )
}

export default App
