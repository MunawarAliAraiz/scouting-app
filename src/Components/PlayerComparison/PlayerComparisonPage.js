import React from 'react';
import Navbar from '../Navbar';
import {
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardFooter,
    MDBIcon,
    MDBBtn } 
    from 'mdb-react-ui-kit';
import { useState } from 'react';
import Api from '../Api';
import AutoComplete from '../Name/Autocomplete';

export default function PlayerComparisonPage() {

    const [count, setCounts] = useState(1);
    const [values, setValues] = useState('');
    const [cards, setCards] = useState([{index: 1,value: true, data:'', update: false}]);
    
    const deleteCard = (index) => {
        const updatedCards = cards.filter((ele,ind) => {
            return ind !== index;
        })
        setCards(updatedCards);
      };

    const editCard = (ind) => {
        const newState = cards.map((obj,index) => {
            if (index === ind) {
                return {...obj, value: true, data: values, update: true};
            }
            return obj;
        });
        
        setCards(newState);
    };

    const updateCard = (ind) => {
        const newState = cards.map((obj,index) => {
            if (index === ind) {
                return {...obj, data:values, value: false};
            }
            return obj;
        });
        
        setCards(newState);
    };


    const addCard = (ind) => {
        const newState = cards[ind].value = false;
        setCards(newState);
        const newState2 = cards[ind].data = values;
        setCards(newState2);
        const name = 'index';
        const value = 'value';
        setCounts(count+1);
        setCards([...cards, {[name]: count, [value]: true, data: values}]);
      };

    
  return (
    <>
    <Navbar/>
    <MDBRow>
        {cards.map((item,index) => {
            let clr = item.data.x_gdar <= 0 ? 'red':'green';
            return item.value === true ? (
                
            <MDBCol key={index} xxl='4' lg='6' sm='12'>
                <MDBCard alignment='center' className='text-white m-3' style={{backgroundColor:'#33485D'}}>
                    <div className='fs-3 fw-bold d-flex  justify-content-center'>
                        {item.update ? <p className='text-center'>Update Player</p>:<p className='text-center'>Add Player</p>}
                    </div>
                    <MDBCardBody>
                        <div className="fs-5 text-start">Choose Player:</div>
                        <AutoComplete option={Api} sty={true} label={"Player's Name"} setValues={setValues} optionLabel={'name_dob'}/>
                        <div className="fs-5 text-start my-1" >Choose Season:</div>
                        <AutoComplete option={Api} sty={true} label={"Season"} optionLabel={'season'}/>
                        <div className="fs-5 text-start my-1">Choose League:</div>
                        <AutoComplete option={Api} sty={true} label={"League"} optionLabel={'league_code'}/>
                        <div className="fs-5 text-start my-1">Choose Team:</div>
                        <AutoComplete option={Api} sty={true} label={"Team"} optionLabel={'team_short_name'}/>
                        <div className="fs-5 text-start my-1">Choose Position:</div>
                        <AutoComplete option={Api} sty={true} label={"Position"} optionLabel={'position'}/>
                    </MDBCardBody>
                    {item.update ? <MDBCardFooter className='text-muted'><MDBBtn size='lg' onClick={()=>{updateCard(index)}}>Update</MDBBtn></MDBCardFooter>:
                    <MDBCardFooter className='text-muted'><MDBBtn size='lg' onClick={()=>{addCard(index)}}>Add</MDBBtn></MDBCardFooter>}
                    </MDBCard>
            </MDBCol>
        ): (
            <MDBCol key={index} xxl='4' lg='6' sm='12'>
            <MDBCard alignment='center' className='text-white m-3' style={{backgroundColor:'#33485D'}}>
                <div className='fs-3 fw-bold d-flex  justify-content-end'>
                <MDBIcon className='m-2 text-end' fas icon="pen" onClick={() => {editCard(index)}} style={{cursor:"pointer"}} />
                <MDBIcon className='m-2 text-end' fas icon="times" onClick={() => {deleteCard(index)}} style={{cursor:"pointer"}} />
                </div>
                <MDBCardBody>
                    <MDBRow className='mb-3'>
                        <MDBCol>
                            <div className='text-start'>
                            <h4>{item.data.name.split(' ')[0]}</h4>
                            <h1>{item.data.name.split(' ').slice(-1)[0]}</h1>
                            <br></br>
                            <h4>{item.data.league}</h4>
                            <h4>{item.data.team}</h4>
                            </div>
                        </MDBCol>
                        <MDBCol>
                            <h4>xG Impact</h4>
                            <h1 style={{padding:'5px',backgroundColor:'white',borderRadius:'5px',display:'inline-block',color:clr}}>{item.data.x_gdar}</h1>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol>
                            <div className='text-center'>
                                <h4>{values.minutes}</h4>
                                <h3>MINUTES</h3>
                            </div>
                        </MDBCol>
                        <MDBCol>
                            <div className='text-center'>
                                <h4>{values.link}</h4>
                                <h3>RATING</h3>
                            </div>
                        </MDBCol>
                        <MDBCol>
                            <div className='text-center'>
                                <h4>{values.height}</h4>
                                <h3>HEIGHT</h3>
                            </div>
                        </MDBCol>
                        <MDBCol>
                            <div className='text-center'>
                                <h4>{values.weight}</h4>
                                <h3>WEIGHT</h3>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
                </MDBCard>
        </MDBCol>
        )})}
    </MDBRow>
    </>
  );
}