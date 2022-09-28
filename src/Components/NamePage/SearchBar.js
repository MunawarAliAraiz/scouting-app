import React from 'react';
import {
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBInput
} from 'mdb-react-ui-kit';

export default function SeacrhBar() {

  return (
    <MDBRow tag='form' className='g-3 mb-3'>
      <MDBCol sm='9' md='6'>
      <MDBInput className='fs-5' label='Search' type='text' size='lg'/>
      </MDBCol>
      <MDBCol sm='3' md='3'>
        <MDBBtn outline color='dark' className='fw-bolder fs-5 text-capitalize' type='submit' size='lg'>Show Results</MDBBtn>
      </MDBCol>
    </MDBRow>
  );
}