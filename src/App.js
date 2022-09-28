import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import NamePage from './Components/NamePage/NamePage';

function App() {
  return (
      <Routes>
        <Route path="/" element={<NamePage />} />
      </Routes>
  );
}

export default App;
