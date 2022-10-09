import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import NamePage from './Components/NamePage/NamePage';
import MetricPage from './Components/MetricPage/MetricPage';

function App() {
  return (
      <Routes>
        <Route path="/" element={<NamePage />} />
        <Route path="metricPage" element={<MetricPage />} />
      </Routes>
  );
}

export default App;
