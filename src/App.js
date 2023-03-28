import React from "react";
import Routes from "./Routes";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import "./App.scss";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
