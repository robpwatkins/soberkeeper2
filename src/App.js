import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Router from './Router';
import Tester from './components/Tester';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Router />
        <Tester />
      </div>
    </BrowserRouter>
  );
}

export default App;
