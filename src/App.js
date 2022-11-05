import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import NamePage from './Components/Name/NamePage';
import MetricPage from './Components/Metric/MetricPage';
import PlayerComparisonPage from './Components/PlayerComparison/PlayerComparisonPage';

function App() {
  return (
      <Routes>
        <Route path="/" element={<NamePage />} />
        <Route path="metricPage" element={<MetricPage />} />
        <Route path="playerComparisonPage" element={<PlayerComparisonPage />} />
      </Routes>
  );
}

export default App;
