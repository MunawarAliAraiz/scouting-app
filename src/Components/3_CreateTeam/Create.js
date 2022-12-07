import React from 'react';
//import Api from '../Api';
import { useState } from 'react';
import { MDBRow,MDBCol,MDBCardBody, MDBCard, MDBBtn } from 'mdb-react-ui-kit';
import PopupPage from './popup';

export default function Create() {

 // const [values, setValues] = useState('');
 // const leagues = Api.map((item) => item.league)
 const [flag, setFlag] = useState(false);
 const formation = [ '3-1-3-1-2', '3-1-4-2', '3-2-4-1', '3-3-3-1', '3-4-1-2', '3-4-2-1', '3-4-3', '3-5-1-1', '3-5-2', '4-1-2-1-2', '4-1-3-2',
                      '4-1-4-1', '4-2-2-2', '4-2-3-1', '4-2-4-0', '4-3-1-2', '4-3-2-1', '4-3-3', '4-4-1-1', '4-4-2', '4-5-1', '5-3-2', '5-4-1']
 const replacementPlayersLabel = ['GK','FB','CB','MF','MF','AM','AM','FW','FW'];
 const squadPlayersLabel = ['GK','FB','CB','CB','MF','MF','AM','AM','CF','CF'];
  
    
  return (
    <>
        <p className='fs-4 fw-bolder'>Team Name</p>
        <input placeholder="Enter's Name" className="w-100 fs-5 p-1"/>
        <div className="fw-bolder fs-4 mt-3">Select Formation</div>
            <select onChange={()=> setFlag(true)} placeholder="Enter's Name" className="w-100 fs-5 mb-2 p-2">
                <option selected disabled>Choose...</option>
                {
                    // v = value, i = index, a = array
                    // leagues.filter((v, i, a) => a.indexOf(v) === i).map((item) => {return(
                    //     <option>{item}</option>
                    // )})
                    formation.map((item) => {return(
                           <option>{item}</option>
                    )})
                }
        </select>
        {flag ? 
        <div>
          <MDBRow center>

            {/* Replacemnent & Squad Players*/}
            <MDBCol md='3' sm='12'>

              {/* Replacemnent Players*/}
              <MDBRow>
                <MDBCard alignment='center' className='p-0 m-3' style={{'box-shadow': 'grey 2px 2px 10px'}}>
                  <div style={{'background-color': '#1ABB9C'}} className='text-start text-white fs-3 fst-normal px-2'>Replacement Players</div>
                  <MDBCardBody>
                  {replacementPlayersLabel.map((item, index) => (
                    <MDBRow className='fw-bold text-black fs-5'>
                      <MDBCol size='3'>{item}</MDBCol>
                      <MDBCol size='9'>{<PopupPage id={index} label={'Replacement Player'}/>}</MDBCol>
                    </MDBRow>))}
                  </MDBCardBody>
                  </MDBCard>
              </MDBRow>

              {/*Squad Players*/}
              <MDBRow>
                <MDBCard alignment='center' className='p-0 m-3' style={{'box-shadow': 'grey 2px 2px 10px'}}>
                  <div style={{'background-color': '#1ABB9C'}} className='text-start text-white fs-3 fst-normal px-2'>Squad Players</div>
                  <MDBCardBody>
                  {squadPlayersLabel.map((item, index) => (
                    <MDBRow className='fw-bold text-black fs-5'>
                      <MDBCol size='3'>{item}</MDBCol>
                      <MDBCol size='9'>{<PopupPage id={index} label={'Squad Player'}/>}</MDBCol>
                    </MDBRow>))}
                  </MDBCardBody>
                  </MDBCard>
              </MDBRow>

            </MDBCol>

            {/* Soccer Field*/}
            <MDBCol md='5' sm='12'>
                <MDBCard alignment='center' className='p-0 m-3' style={{'box-shadow': 'grey 2px 2px 10px', 'height':'98vh'}}>
                  <MDBCardBody className="border d-flex align-items-center justify-content-center">
                    <div >
                      <h1>Soccer's Feild</h1>
                    </div>
                  </MDBCardBody>
                  </MDBCard>
            </MDBCol>
          </MDBRow>
          <MDBRow start>
            <MDBCol className="mt-3 text-center">
              <MDBBtn outline color='dark' className='fw-bolder fs-5 text-capitalize' type='submit' size='lg'>Create</MDBBtn>
            </MDBCol>
          </MDBRow>
        </div> : null}
    </>
  );
}