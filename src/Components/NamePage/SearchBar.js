import React from 'react';
import {
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBInput
} from 'mdb-react-ui-kit';
import Api from '../Api';
import { useState } from 'react';
import '../Navbar.css';

export default function SeacrhBar() {

  const [users] = useState(Api);
  const [text, setText] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const onChangeHandler = (text) => {
    let matches = []
    if (text.length > 0)
    {
      matches = users.filter(users => {
        const regex = new RegExp(`${text}`, "gi");
        return users.name.match(regex);
      })
    }
    setSuggestions(matches);
    setText(text)
  }

  const onSuggestionHandler = (text) => {
    setText(text);
    setSuggestions([]);
  }

  return (
    <div>
    <MDBRow className='g-3'>
      <MDBCol xs='9' sm='9' md='8'>
      <MDBInput className='fs-5' label='Search' type='text' size='lg' onChange={e => onChangeHandler(e.target.value)} value={text} onBlur={() => setTimeout(() => {
        setSuggestions([])
      }, 100)}/>
      </MDBCol>
      <MDBCol xs='3' sm='3' md='4'>
        <MDBBtn outline color='dark' className='fw-bolder fs-5 text-capitalize' type='submit' size='lg'>Show Results</MDBBtn>
      </MDBCol>
    </MDBRow>
    <MDBRow tag='form' className='g-3 mb-3'>
      <MDBCol sm='9' md='6'>
        <div className="suggestionDiv">
        {suggestions && suggestions.slice(0,5).map((suggestion,i)=>
          (<div key={i} className="suggestion fs-5 ps-3 pt-2" onClick={() => onSuggestionHandler(suggestion.name)}>{suggestion.name}</div>)
        )}
      </div>
      </MDBCol>
    </MDBRow>
      
    </div>
  );
}