// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been enabled", "Success");
      // document.title="TextUtils-Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "Success");
      // document.title="TextUtils-Light Mode";
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar
          title="Text Analyzer"
          aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="Try Text Analyzer- Word counter, Character counter, Convert to Uppercase, Convert to Lowercase"
                  showAlert={showAlert}
                  mode={mode}
                />
              }
            />
          </Routes>
          {/* <TextForm heading="Enter the text to analyze below" showAlert={showAlert} mode={mode} /> */}
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
