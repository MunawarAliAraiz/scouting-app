import {
    MDBRow,
    MDBCol
  } from 'mdb-react-ui-kit';
import Slider from '@mui/material/Slider';
import { useState } from 'react';



export default function DiscreteSlider(props) {

    const [value, setValue] = useState('Not Important')
    const onChangeHandler = (e) => {
        e.target.value === 1 && setValue('Not Important')
        e.target.value === 2 && setValue('Somewhat Important')
        e.target.value === 3 && setValue('Very Important')
        
    }

  return (
    <div className='mx-3 my-3 ps-2' style={{backgroundColor:"rgba(48, 48, 48,0.05)", borderRadius:"5px"}}>
    <div className="fs-5 pb-0">{props.name}</div>
    <MDBRow>
    <MDBCol md="8">
      <Slider
        defaultValue={1}
        step={1}
        min={1}
        max={3}
        onChange={(e)=> onChangeHandler(e)}
      />
      </MDBCol>
      <MDBCol md="4">
      <div className="text-center fs-5 pb-0">{value}</div>
      </MDBCol>
    </MDBRow>
    </div>
    
  );
}
