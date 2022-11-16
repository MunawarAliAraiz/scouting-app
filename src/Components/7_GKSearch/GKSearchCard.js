import React from "react";
import { MDBCard, MDBCardBody, MDBRow, MDBCol, MDBBtn} from "mdb-react-ui-kit";
import "../Custom.css";
import DiscreteSlider from "../2_Metric/Slider";

export default function GKSearchCard() {
  let arr1 = ['Attacking Impact', 'Shot Stopping', 'Defending Impact', 'Defending Frequency', 'Claims', 'Claim Success %'];
  let arr2 = ['Pass Short', 'Pass Medium', 'Pass Long', 'Ball Retention'];
  
  return (
    <>
    <MDBRow className="mt-3 g-4">
      <MDBCol md="12" xxl="6">
        <MDBCard>
          <MDBCardBody className="border-radius cardHeight py-3 px-5">
          <div className="fs-3 fw-bold mb-3 text-uppercase">Model</div>
            {arr1.map((item)=>(
                <DiscreteSlider name={item}/>
            ))}
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol md="12" xxl="6">
        <MDBCard>
        <MDBCardBody className="border-radius cardHeight py-3 px-5">
          <div className="fs-3 fw-bold mb-3 text-uppercase">Skills Rating</div>
            {arr2.map((item)=>(
                <DiscreteSlider name={item}/>
            ))}
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
     {/* Button */}
    <MDBRow className="mt-3 g-4">
        <div className="text-center">
        <MDBBtn outline color='dark' className=' align-item-center fw-bolder fs-5 text-capitalize' type='submit' size='lg'>Show Results</MDBBtn>
        </div>
    </MDBRow>
    
  </>
  );
}
