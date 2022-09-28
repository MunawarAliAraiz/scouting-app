import React from 'react';
import Navbar from '../Navbar';
import SeacrhBar from './SearchBar';
import DescriptionCard from './DescriptionCard';
import Cards from '../Cards';

export default function NamePage() {

  return (
    <>
    <Navbar/>
    <SeacrhBar/>
    <DescriptionCard/>
    <Cards/>
    </>
  );
}