import React from "react";
import { MDBCard, MDBCardBody, MDBRow, MDBCol } from "mdb-react-ui-kit";
import "./Custom.css";
import Tabs from "./1_Name/Tabs";
import SeacrhBar from "./1_Name/SearchBar";
import ReactableTable from "./1_Name/ReactableTable";

export default function ReactableCard() {
  let arr = ['Model', 'Style'];
  let elements = [<ReactableTable/>,<SeacrhBar/>]
  
  return (
    <MDBRow className="mt-3 g-4">
      <MDBCol>
        <MDBCard>
          <MDBCardBody className="border-radius cardHeight py-0 px-0">
            <Tabs id="rtTable" data={arr} content={elements} align='start'/>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
}
