import React from 'react';
import {
  MDBRow,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';
import Api from '../Api';
import '../Custom.css';
import AutoComplete from './Autocomplete';

export default function SeacrhBar() {

  return (
    <div className='my-3'>
    <MDBRow className='g-3'>
      <MDBCol xs='8' sm='8' md='8'>
        <AutoComplete option={Api} label={"Player's Name"}/>
      </MDBCol>
      <MDBCol xs='4' sm='4' md='4'>
        <MDBBtn outline color='dark' className='fw-bolder fs-5 text-capitalize' type='submit' size='lg'>Show Results</MDBBtn>
      </MDBCol>
    </MDBRow>  
    </div>
  );
}