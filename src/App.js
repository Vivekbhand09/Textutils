import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar";
import Textform from "./Components/TextForm";
import About from "./Components/About";
import React,{useState} from 'react'
import Alert from './Components/Alert';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
const[mode,setMode]=useState('dark');//whether dark mode is enabled or not
const[alert,setAlert]=useState(null);

const showAlert=(message,type)=>{
   setAlert({
    msg:message,
    type:type
   })
   setTimeout(()=>{
    setAlert(null);
   },1200);
}


const removeBodyClasses=()=>{
  document.body.classList.remove('bg-light')
  document.body.classList.remove('bg-dark')
  document.body.classList.remove('bg-warning')
  document.body.classList.remove('bg-danger')
  document.body.classList.remove('bg-success')
}

const toggleMode=(cls)=>{
  removeBodyClasses();
  document.body.classList.add('bg-'+cls)
   
}
  return (
   <>
<Router>
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
  <Alert  alert={alert}/>
   <div className="container my-3">
   <Routes>
          <Route  path='/About'
           element={ <About mode={mode} />}
            />
          
          <Route path="/"
          element={<Textform  showAlert={showAlert} heading="Try TextUtils - Word Counter , Character Counter, Remove extra spaces"  mode={mode}/>}
         />
          </Routes>
   
  
    </div>
    </Router>
   </>
  
 
  );
}

export default App;
