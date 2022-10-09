import React from "react";
import { MDBCard, MDBCardBody, MDBRow, MDBCol } from "mdb-react-ui-kit";
import "./Navbar.css";
import Tabs from "./NamePage/Tabs";
import SeacrhBar from "./NamePage/SearchBar";
import ReactableTable from "./NamePage/ReactableTable";

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
