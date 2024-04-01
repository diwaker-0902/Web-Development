import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');    // whether dark mode is enable or not 

 const toggleMode = ()=>{
  if (mode === 'light') {
    setMode('dark');
    document.body.style.backgroundColor = 'grey';

  }else {
    setMode('light');
    document.body.style.backgroundColor = 'white';
  }
 }

  return (
  <>
<Navbar title="OhhTeri" Searchhhh="Kya Search Karoge" mode={mode} toggleMode={toggleMode} />       
{/* <Navbar/>          */}
{/* here Navbar is the default prompt */}

<div className="container" my-3>
<TextForms heading="Enter the text to analyze below"/>

{/* <About/> */}

</div>
  </>
  );
}

export default App;
