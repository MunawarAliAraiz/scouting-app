import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import NamePage from './Components/1_Name/NamePage';
import MetricPage from './Components/2_Metric/MetricPage';
import CreateTeamPage from './Components/3_CreateTeam/CreateTeamPage';
import PlayerMarketPage from './Components/4_PlayerMarket/PlayerMarketPage';
import PlayerComparisonPage from './Components/5_PlayerComparison/PlayerComparisonPage';
import SimilarPlayerPage from './Components/6_SimilarPlayer/SimilarPlayerPage';
import GKSearchPage from './Components/7_GKSearch/GKSearchPage';
import GuidePage from './Components/8_Guide/GuidePage';

function App() {
  return (
      <Routes>
        <Route path="/" element={<NamePage />} />
        <Route path="metricPage" element={<MetricPage />} />
        <Route path="createTeamPage" element={<CreateTeamPage />} />
        <Route path="playerComparisonPage" element={<PlayerComparisonPage />} />
        <Route path="similarPlayerPage" element={<SimilarPlayerPage />} />
        <Route path="playerMarketPage" element={<PlayerMarketPage />} />
        <Route path="gkSeacrhPage" element={<GKSearchPage />} />
        <Route path="guidePage" element={<GuidePage />} />
      </Routes>
  );
}

export default App;
