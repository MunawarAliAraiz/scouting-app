import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBRow,
  MDBCol,
} from 'mdb-react-ui-kit';
import "../Navbar.css";

export default function DescriptionCard() {
  return (
    <MDBCard>
      <MDBCardBody className="back-color border-radius">
        <MDBRow>
          <MDBCol sm="12" md="9">
            <div className="text-uppercase fs-5 pb-0 ">Lionel</div>
            <div className="text-uppercase fs-2 fw-bold">Messi</div>
            <div className="fs-4">Paris Saint Germain</div>
          </MDBCol>
        </MDBRow>
        <MDBRow className="mt-3 g-5">
          <MDBCol sm="12" md="6" lg="3">
            <div className="fs-5">170 cm</div>
            <div className="text-uppercase fs-4 pb-0">Height</div>
          </MDBCol>
          <MDBCol sm="12" md="6" lg="3">
            <div className="fs-5">72</div>
            <div className="text-uppercase fs-4 pb-0">Weight</div>
          </MDBCol>
          <MDBCol sm="12" md="6" lg="3">
            <div className="fs-5">35</div>
            <div className="text-uppercase fs-4 pb-0">Age</div>
          </MDBCol>
          <MDBCol sm="12" md="6" lg="3">
            <div className="fs-5">Left</div>
            <div className="text-uppercase fs-4 pb-0">Foot</div>
          </MDBCol>
        </MDBRow>
        <MDBRow className="mt-3 g-5">
          <MDBCol sm="12" md="6" lg="3">
          <select className="back-color w-100 fs-4 comboBox my-2">
              <option>LB</option>
              <option>LM/LWB</option>
              <option>RB</option>
              <option>RM/RWB</option>
            </select>
            <div className="text-uppercase fs-4 pb-0">Position</div>
          </MDBCol>
          <MDBCol sm="12" md="6" lg="3">
          <select className="back-color w-100 fs-4 comboBox my-2">
              <option>LB</option>
              <option>LM/LWB</option>
              <option>RB</option>
              <option>RM/RWB</option>
            </select>
            <div className="text-uppercase fs-4 pb-0">Season</div>
          </MDBCol>
          <MDBCol sm="12" md="6" lg="3">
          <select className="back-color w-100 fs-4 comboBox my-2">
              <option>LB</option>
              <option>LM/LWB</option>
              <option>RB</option>
              <option>RM/RWB</option>
            </select>
            <div className="text-uppercase fs-4 pb-0">League</div>
          </MDBCol>
          <MDBCol sm="12" md="6" lg="3">
            <select className="back-color w-100 fs-4 comboBox my-2">
              <option>LB</option>
              <option>LM/LWB</option>
              <option>RB</option>
              <option>RM/RWB</option>
            </select>
            <div className="text-uppercase fs-4 pb-0">Team</div>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
}