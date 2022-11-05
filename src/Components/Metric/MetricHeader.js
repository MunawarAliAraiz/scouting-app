import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBRow,
  MDBCol,
} from 'mdb-react-ui-kit';
import "../Custom.css";
import RangeSlider from './RangeSlider';

export default function MetricHeader() {
  return (
    <MDBCard>
      <MDBCardBody className="back-color border-radius">
        <MDBRow className="g-5">
          <MDBCol sm="12" md="6" lg="3">
          <div className="text-uppercase text-center fw-bold fs-4 pb-0">Position</div>
          <select className="back-color w-100 fs-4 comboBox my-2">
              <option>LB</option>
              <option>LM/LWB</option>
              <option>RB</option>
              <option>RM/RWB</option>
            </select>
          </MDBCol>
          <MDBCol sm="12" md="6" lg="3">
            <div className="text-uppercase text-center fw-bold fs-4 pb-0">League</div>
            <select className="back-color w-100 fs-4 comboBox my-2">
              <option>LB</option>
              <option>LM/LWB</option>
              <option>RB</option>
              <option>RM/RWB</option>
            </select>
          </MDBCol>
          <MDBCol sm="12" md="4" lg="2">
            <div className="text-uppercase text-center fw-bold fs-4 pb-0">Season</div>
            <div className="fs-5 text-center"><RangeSlider value={[17,35]}/></div>
            
          </MDBCol>
          <MDBCol sm="12" md="4" lg="2">
            <div className="text-uppercase text-center fw-bold fs-4 pb-0">Age</div>
            <div className="fs-5 text-center"><RangeSlider value={[16,22]}/></div>
          </MDBCol>
          <MDBCol sm="12" md="4" lg="2">
            <div className="text-uppercase text-center fw-bold fs-4 pb-0">Minutes</div>
            <div className="fs-5 text-center"><RangeSlider value={50}/></div>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
}