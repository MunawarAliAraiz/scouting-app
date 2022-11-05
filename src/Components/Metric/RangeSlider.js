import * as React from 'react';
import Slider from '@mui/material/Slider';
import {
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';


export default function RangeSlider(props) {
  const [value, setValue] = React.useState(props.value);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const ele1 = <MDBRow>
                  <MDBCol>
                    <div className="fs-5 pb-0 fw-bold">{value[0]}</div>
                    </MDBCol>
                  <MDBCol>
                    <div className="fs-5 pb-0 fw-bold">{value[1]}</div>
                  </MDBCol>
              </MDBRow>;
              
  const ele2 = <div className="fs-5 pb-0 fw-bold">{value}</div>

  return (
    <>
      <Slider
        defaultValue={props.value}
        step={1}
        min={props.value[0]?props.value[0]:50}
        max={props.value[1]?props.value[1]:6000}
        value={value}
        onChange={handleChange}
        sx={{
          color: "#1ABB9C",
          '& .MuiSlider-thumb': {
            height: 24,
            width: 24,
            backgroundColor: '#1ABB9C',
            },
            '& .MuiSlider-rail': {
              backgroundColor: '#fff',
              opacity:1
              }
        }}
        disableSwap={true}
      />
      {props.value[0]?ele1:ele2}
      </>
  );
}
