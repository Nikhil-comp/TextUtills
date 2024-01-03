import Navbar from './components/Navbar';
import About from './components/About';
import Textform from './components/Textform';
import Alert from './components/Alert';
import React, { useState } from 'react';
import {
  BrowserRouter ,
  Routes,
  Route
} from "react-router-dom";
export default function App() {
  const[mode,setMode] = useState('light');
  const togglemode =()=>{
      if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = '#0f1121';
        showAlert("dark Mode has been Enabled","success");
        document.title = "text-uttils dark mode";
        // setInterval(
        //   ()=>{
        //     document.title = "text util in amazing mode";
        //   },2000);
      } 
      else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("light Mode has been Enabled","success");
        document.title = "text-uttils light mode";
      }
  }
  const[alert,setAlert] = useState(null);

  const showAlert=(message,type)=>{
       setAlert(
        {
          msg:message,
          type:type
        }
      );
      setTimeout(()=>{
        setAlert(null);
      },2000)
  }
  
  return (
    <>
      <BrowserRouter>
      <Navbar title="TextUttils" aboutText="About" mode={mode} toggleMode={togglemode}/>
      <Alert alert={alert}  />
      <div className="container my-3">
      <Routes>
          <Route path="/about" element={<About></About>}/>
        <Route path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}/>
      </Routes>
      </div>
      </BrowserRouter>
     
    </>
  );
}

