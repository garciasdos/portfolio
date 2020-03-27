import React from 'react';
import './App.sass';
import Header from "./components/Portfolio/header/header.component";
import Summary from "./components/Portfolio/summary/summary.component";
import Portfolio from "./components/Portfolio/portfolio.component";

function App() {
  return (
    <div className="App">
      <Portfolio/>
    </div>
  );
}

export default App;
