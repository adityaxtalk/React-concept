import React from 'react'
import { BrowserRouter, Routes, Route, useNavigate, Navigate, useParams, useSearchParams } from 'react-router-dom';
import Class from "./Class";
import FormValidation from "./FormValidation";
import LazyLoading from './LazyLoading';
import Hooks from './Hooks';
import Usestate from './hooks/Usestate'
import Usereducer from './hooks/Usereducer'
import Useeffect from './hooks/Useeffect'
import Usecallback from './hooks/Usecallback'
import Usecontext from './hooks/Usecontext';

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

const User = () => {
  const {userId} = useParams();
  return <div>Hello {userId}</div> 
}

const SearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return <input value={searchParams.get("query") || ""} onChange={(e)=> setSearchParams({query: e.target.value})}/>
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
        <Route path="/user/:userId" element={<User/>}/>
        <Route path="/queryParams" element={<SearchParams/>}/>
        <Route path='/lazyloading' element={<LazyLoading/>}/>
        <Route path="/hooks" element={<Hooks/>}>
           <Route path='useeffect' element={<Useeffect/>}/>
           <Route path='usestate' element={<Usestate/>}/>
           <Route path='usereducer' element={<Usereducer/>}/>
           <Route path='usecallback' element={<Usecallback/>}/>
           <Route path='usecontext' element={<Usecontext/>}/>
        </Route>
        <Route path='*' element={<Navigate to="/form"/>}/>
        {/* <Route path="/home" element={<Home/>}/> */}
      </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default Routing