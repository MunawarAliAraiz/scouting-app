import React from "react";
import { MDBCard, MDBCardBody, MDBRow, MDBCol } from "mdb-react-ui-kit";
import "./Navbar.css";
import Tabs from "./NamePage/Tabs";

export default function Cards() {
  return (
    <MDBRow className="mt-3 g-4">
      <MDBCol md="12" xl="4">
        <MDBCard>
          <MDBCardBody className="border-radius cardHeight">
            <Tabs/>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol md="12" xl="4">
        <MDBCard>
          <MDBCardBody className="border-radius cardHeight"></MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol md="12" xl="4">
        <MDBCard>
          <MDBCardBody className="border-radius cardHeight"></MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
}
