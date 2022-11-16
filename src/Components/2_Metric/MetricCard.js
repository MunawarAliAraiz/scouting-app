import React from "react";
import { MDBCard, MDBCardBody, MDBRow, MDBCol, MDBIcon} from "mdb-react-ui-kit";
import "../Custom.css";
import Checkbox from '@mui/material/Checkbox';
import DiscreteSlider from "./Slider";

export default function MetricCard() {
  let arr1 = ['Ball Progression', 'Shot Creation', 'Possession Retention', 'Defending Frequency', 'Defending Impact'];
  let arr2 = ['Aerial Open Play', 'Aerial Set Play', 'Dribbling', 'Tackling', 'Finishing'];
  let arr3 = ['Dribbling', 'Shots', 'Box Receptions', 'Link-up Passing', 'Forward Passing'];
  let arr4 = ['Aerial', 'Cross', 'Disrupting', 'Recovering'];
  
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
    <MDBRow className="mt-3 g-4">
    <MDBCol md="12">
      <MDBCard>
        <MDBCardBody className="border-radius cardHeight py-3 px-5">
        <div className="fs-3 fw-bold mb-3 text-uppercase">Style</div>
            <MDBRow>
                <MDBCol sm='12' md='6'>
                    {arr3.map((item)=>(
                        <DiscreteSlider name={item}/>
                    ))}
                </MDBCol>
                <MDBCol>
                    {arr4.map((item)=>(
                        <DiscreteSlider name={item}/>
                    ))}
                </MDBCol>
            </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  <MDBRow className="mt-3 g-4">
  </MDBRow>
    <MDBCol md="12">
      <MDBCard>
        <MDBCardBody className="border-radius box-shadow py-3 px-5">
        <div className="fs-3 fw-bold mb-3 text-uppercase m-3">Player Rating</div>
            <MDBRow className="g-3 m-2">
                <MDBCol className="fs-4"><Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}/><MDBIcon fab icon="gripfire" className="mx-1"/>High Performer</MDBCol>
                <MDBCol className="fs-4"><Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}/><MDBIcon fas icon="exclamation" className="mx-1"/>Low Performer</MDBCol>
                <MDBCol className="fs-4"><Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}/><MDBIcon far icon="gem" className="mx-1"/>First Season</MDBCol>
                <MDBCol className="fs-4"><Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}/><MDBIcon fas icon="battery-quarter" className="mx-1"/>Underused</MDBCol>
                <MDBCol className="fs-4"><Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}/><MDBIcon fas icon="rocket" className="mx-1"/>Young Talent</MDBCol>
            </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  </MDBRow>
  </>
  );
}
