import React from "react";
import { MDBCard, MDBCardBody, MDBRow, MDBCol } from "mdb-react-ui-kit";
import "./Custom.css";
import Tabs from "./1_Name/Tabs";
import SeacrhBar from "./1_Name/SearchBar";
import ProfileFieldPlotTable from "./1_Name/ProfileFieldPlotTable";

export default function Cards() {
  let arr1 = ['Profile', 'Position'];
  let arr2 = ['Model', 'Style', 'Contribution'];
  let arr3 = ['Duel Rating', 'Finishing/Saving'];
  let elements1 = [<ProfileFieldPlotTable/>,<SeacrhBar/>]
  let elements2 = [<SeacrhBar/>,<ProfileFieldPlotTable/>, <h3>I am 3rd</h3>]
  let style = 'end'
  
  return (
    <MDBRow className="mt-3 g-4">
      <MDBCol md="12" xxl="4">
        <MDBCard>
          <MDBCardBody className="border-radius cardHeight py-0 px-0">
            <Tabs id="ProfileFieldPlot" data={arr1} content={elements1} align={style}/>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol md="12" xxl="4">
        <MDBCard>
          <MDBCardBody className="border-radius cardHeight py-0 px-0">
            <Tabs id="PolarPlot" data={arr2} content={elements1} align={style}/> 
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol md="12" xxl="4">
        <MDBCard>
          <MDBCardBody className="border-radius cardHeight py-0 px-0">
            <Tabs id="PolarBarChart" data={arr3} content={elements2} align={style}/>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
}
