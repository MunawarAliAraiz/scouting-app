import React from 'react';
import Navbar from '../Navbar';
import SeacrhBar from './SearchBar';
import PerformanceCard from './PerformanceCard';
import Cards from './Cards';
import ReactableCard from '../ReactableCard';

export default function NamePage() {

  return (
    <>
    <Navbar/>
    <SeacrhBar/>
    <PerformanceCard/>
    <Cards/>
    <ReactableCard/>
    </>
  );
}