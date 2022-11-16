import React from 'react';
import Navbar from '../Navbar';
import AutoComplete from '../1_Name/Autocomplete';
import Api from '../Api';
import { useState } from 'react';
import { MDBCardHeader,MDBCard,MDBCardBody, MDBBtn } from 'mdb-react-ui-kit';

export default function SimilarPlayerPage() {

  const [values, setValues] = useState('');
    
  return (
    <>
    <Navbar/>
    <br></br>
    {/* 1 */}
    <MDBCard alignment='center' className='text-white m-3'>
    <MDBCardHeader style={{backgroundColor:'#33485D',textAlign:'left',fontSize:'24px'}}>Name</MDBCardHeader>
        <MDBCardBody>
            <AutoComplete option={Api} label={"Player's Name"} setValues={setValues} optionLabel={'name_dob'}/>
        </MDBCardBody>
    </MDBCard>
    {/* 2 */}
    <MDBCard alignment='center' className='text-white m-3'>
    <MDBCardHeader style={{backgroundColor:'#33485D',textAlign:'left',fontSize:'24px'}}>Position</MDBCardHeader>
        <MDBCardBody>
            <AutoComplete option={Api} label={"Position"} optionLabel={'position'}/>
        </MDBCardBody>
    </MDBCard>
    {/* 3 */}
    <MDBCard alignment='center' className='text-white m-3'>
    <MDBCardHeader style={{backgroundColor:'#33485D',textAlign:'left',fontSize:'24px'}}>Season</MDBCardHeader>
        <MDBCardBody>
            <AutoComplete option={Api} label={"Season"} optionLabel={'season'}/>
        </MDBCardBody>
    </MDBCard>
    {/* 4 */}
    <MDBCard alignment='center' className='text-white m-3'>
    <MDBCardHeader style={{backgroundColor:'#33485D',textAlign:'left',fontSize:'24px'}}>League</MDBCardHeader>
        <MDBCardBody>
            <AutoComplete option={Api} label={"League"} optionLabel={'league_code'}/>
        </MDBCardBody>
    </MDBCard>
    {/* 5 */}
    <MDBCard alignment='center' className='text-white m-3'>
    <MDBCardHeader style={{backgroundColor:'#33485D',textAlign:'left',fontSize:'24px'}}>Team</MDBCardHeader>
        <MDBCardBody>
            <AutoComplete option={Api} label={"Team"} optionLabel={'team_short_name'}/>
        </MDBCardBody>
    </MDBCard>
    
    {/* Button */}
    <div className="text-center">
    <MDBBtn outline color='dark' className=' align-item-center fw-bolder fs-5 text-capitalize' type='submit' size='lg'>Show Results</MDBBtn>
    </div>
    </>
  );
}