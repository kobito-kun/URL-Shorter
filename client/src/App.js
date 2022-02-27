// Importing Modules
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// Importing Pages
import MainPage from './pages/MainPage';

// Importing CSS
import './assets/css/built.css';
import DashPage from './pages/DashPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/dash" element={<DashPage/>} />
      </Routes>
    </Router>
  );
}

export default App;