import './App.css';
import navlogo from "./components/Navbar-logo.png";
import logo from "./components/Texticon.png";
import ScrollSpy  from "./components/Scrollspy"
import Navbar from './components/Navbar';
import TextForm from "./components/TextForm";
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  // const[style2,setStyle2]=useState("")
  const[mode,setMode]=useState("light")

  function changeMode() {
    if(mode==="light"){
      setMode('dark')
      document.body.style.backgroundColor='#676C6F'
      // document.body.style.backgroundColor='#4B5B5B'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
    }
  }
  // document.body.classList.add(`bg-${mode}`);
  

  return (
    <BrowserRouter>
    <div className="App">
      <Navbar title="Text-OP" mode={mode} navlogo={navlogo} toggleMode={changeMode}/>

    </div>
    <Routes>
		  <Route path='/' element={<TextForm mode={mode} />}/> 
		  <Route path='/about' element={<ScrollSpy logo={logo}   title="TEXT-||-TEXT" mode={mode}  toggleMode={changeMode} Firstheading="About Us" Secondheading="Our Tools" Thirdheading="Our Vision" Fourthheading="Why Choose Us?"/>}/> 
		
	  </Routes>
    </BrowserRouter>
  );
}

export default App;

