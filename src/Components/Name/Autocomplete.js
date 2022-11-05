import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function AutoComplete(props) {

const defaultProps = {
        options: props.option,
        getOptionLabel: (option) => option[props.optionLabel],
      };

const sty = {
  '.MuiAutocomplete-input':{color: '#fff'},
  '.MuiAutocomplete-clearIndicator':{color: '#fff'},
  '.MuiAutocomplete-popupIndicator':{color: '#fff'},
  '.MuiInputLabel-root':{color: '#fff'},
  '.MuiOutlinedInput-root':{color: '#fff', borderBottom: '5px solid #1ABB9C'},
};

  return (
    <>
    <Autocomplete
      {...defaultProps}
      disablePortal
      id="combo-box-demo"
      onChange={(event, newValue) => {props.setValues(newValue)}}
      sx={props.sty ? sty : null}
      renderInput={(params) => <TextField {...params} label={props.label} />}
    />
   </>
  );
}