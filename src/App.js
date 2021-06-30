import React from "react";
import './App.css';
import Header from "./components/Header";
import Pricing from "./components/Pricing";
import Extra from "./components/Extra";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Pricing />
      <Extra />
      <Footer />
    </div>
  );
}

export default App;
