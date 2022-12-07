import React from 'react'
import Popup from 'reactjs-popup';
//import 'reactjs-popup/dist/index.css';
import { useState } from 'react';
import '../Custom.css';
import {
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBCardFooter,
    MDBIcon
  } from 'mdb-react-ui-kit';
  import AutoComplete from '../1_Name/Autocomplete';
  import Api from '../Api';

function PopupPage(props) {

    const [values, setValues] = useState('');

  return (
    <Popup className={'popup-content'} trigger={<p className='p-0 m-0'>----------</p>} modal>
    {close => (<MDBCard alignment='center'>
      <MDBCardHeader>
        <div className='d-flex justify-content-between'>
            <h2>{`${props.label} ${props.id+1}`}</h2>
            <MDBIcon style={{cursor:'pointer'}} size='2x' className=" close" onClick={close} fas icon="times" />
        </div>
      </MDBCardHeader>
      <MDBCardBody>
        <p className='text-start m-0 fs-4'>Name :</p>
        <AutoComplete option={Api} label={"Player's Name"} setValues={setValues} optionLabel={'name_dob'}/>

        <p className='text-start m-0 fs-4'>Season :</p>
        <AutoComplete option={Api} label={"Season"} setValues={setValues} optionLabel={'name_dob'}/>

        <p className='text-start m-0 fs-4'>League :</p>
        <AutoComplete option={Api} label={"League"} setValues={setValues} optionLabel={'name_dob'}/>

        <p className='text-start m-0 fs-4'>Team :</p>
        <AutoComplete option={Api} label={"Team"} setValues={setValues} optionLabel={'name_dob'}/>

        <p className='text-start m-0 fs-4'>Position :</p>
        <AutoComplete option={Api} label={"Position"} setValues={setValues} optionLabel={'name_dob'}/>

        <div className='mt-2 d-flex justify-content-evenly'>
            <p className='fw-bold fs-3'>Minutes: </p>
            <p className='fw-bold fs-3'></p>
            <p className='fw-bold fs-3'>xGDAR: </p>
            <p className='fw-bold fs-3'></p>
        </div>
            
      </MDBCardBody>
      <MDBCardFooter><div className='text-end' ><button style={{backgroundColor:'#33485D',color:'white', width:'100px', height:'40px'}} className='btn'>Select</button></div></MDBCardFooter>
    </MDBCard>)}
    </Popup>
  )
}

export default PopupPage