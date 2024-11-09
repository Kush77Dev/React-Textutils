import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/NavBar";
import AboutUs from "./components/AboutUs";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [Mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#222022';
      document.body.style.color = 'white';
      showAlert("Dark Mode has been Enabled", "success");
      document.title = 'Textutils - Home Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light Mode has been Enabled", "success");
      document.title = 'Textutils - Home Light Mode';
    }
  };

  return (
    <>
      <Router> 
        <Navbar title="Textutils" aboutText="About us" mode={Mode} toggleMode={toggleMode} />
        <div className="container my-3">
          <Alert alert={alert} />
        </div>
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<AboutUs mode={Mode}/>} />
            <Route path="/" element={
              <TextForm Heading="Enter the Text to Analyze Below" mode={Mode} showAlert={showAlert} />
            } />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
