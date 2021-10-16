import React from 'react';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

export default function RadioBtns(props) {
   return (
      <FormControl
         component='fieldset'
         style={{border: 'none', width: '360px', margin: '5px auto 15px'}}
      >
         <FormLabel component='legend'>Gender</FormLabel>
         <RadioGroup
            aria-label='gender'
            id='optGender'
            value={props.state.optGender}
            onChange={props.handleChange}
            row
         >
            <FormControlLabel value='F' name='optGender' control={<Radio />} label='Female' />
            <FormControlLabel value='M' name='optGender' control={<Radio />} label='Male' />
         </RadioGroup>
      </FormControl>
   )
}
