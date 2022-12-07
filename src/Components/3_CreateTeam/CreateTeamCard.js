import React from "react";
import { MDBCard, MDBCardBody, MDBRow, MDBCol } from "mdb-react-ui-kit";
import "../Custom.css";
import Tabs from '../1_Name/Tabs'
import SeacrhBar from "../1_Name/SearchBar";
import Create from "./Create";

export default function CreateTeamCard() {
  let arr1 = ["Create", "View", "Update", "Delete"];
  let elements = [<Create />, <SeacrhBar />, <SeacrhBar />, <Create />];
  let style = "end";

  return (
    <MDBRow className="mt-3 g-4">
      <MDBCol md="12" xxl="12">
        <MDBCard>
          <MDBCardBody className="border-radius cardHeight py-0 px-0">
            <Tabs
              id="rtTable"
              data={arr1}
              content={elements}
              align={style}
            />
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
}
