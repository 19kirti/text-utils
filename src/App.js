import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import TextForm from './TextForm';
import About from './About';
import React , {useState} from "react";
import Alert from './Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark Mode has been enabled", "success");
      //document.title='Text-Utils Dark Mode';

      // setInterval(() => {
      //   document.title='Text-Utils is an amazing utility web-site';
      // }, 1500);

      // setInterval(() => {
      //   document.title='Subscribe to Text-Utils';
      // }, 2000);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
      //document.title='Text-Utils Light Mode';
    }
  }

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 2000);

}


  return (
    <>
    <Router>

    <NavBar mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>

    <div className="container my-3">
    <Routes>

      <Route exact path="/About" element={<About mode ={mode}/>}/> 
    
    <Route exact path="/" element={<TextForm  heading="Try TextUtils - Word Counter, Character Counter, upperCase lowerCase Converter :) " mode={mode} showAlert={showAlert}/>}/>
    
    </Routes>
    </div>

    </Router>


    </>
  );
}

export default App;
