import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import TextForm from './TextForm';
import About from './About';
import React , {useState} from "react";
import Alert from './Alert';

function App() {

  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark Mode has been enabled", "success");
      document.title='Text-Utils Dark Mode';

      setInterval(() => {
        document.title='Text-Utils is an amazing utility web-site';
      }, 1500);

      setInterval(() => {
        document.title='Subscribe to Text-Utils';
      }, 2000);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
      document.title='Text-Utils Light Mode';
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
    <NavBar mode={mode} toggleMode={toggleMode} />

    <Alert alert={alert}/>

    <About mode ={mode} />

    <div className="container my-3">
    <TextForm  heading="Enter the text to analyze below :) " mode={mode} showAlert={showAlert}/>
    </div>

    {/* <div className="container my-2">
      <About/>
    </div> */}


    </>
  );
}

export default App;
