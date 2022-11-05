import React from 'react';
import Navbar from '../Navbar';
import MetricHeader from './MetricHeader';
import MetricCard from './MetricCard';
import MetricTable from './MetricTable';

export default function MetricPage() {

  return (
    <>
    <Navbar/>
    <MetricHeader/>
    <MetricCard/>
    <MetricTable/>
    </>
  );
}