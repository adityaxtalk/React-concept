import React from 'react'
import { BrowserRouter, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Class from "./Class";
import FormValidation from "./FormValidation";
const Home = () => 
    <div>Home</div>

const NotFound = () => {
  const navigate = useNavigate();
 
  const navigateToHome = () => {
    navigate("/class");
  }

  return <>
    <div>Page not found</div>
    <button onClick={navigateToHome}> Go to Home</button>
  </>
}
const Routing = () => {
  return (
    <>
    <h1>Routing</h1>
<BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/class' element={<Class/>}/>
        <Route path="/form" element={<FormValidation/>}/>
        <Route path='*' element={<Navigate to="/form"/>}/>
      </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default Routing