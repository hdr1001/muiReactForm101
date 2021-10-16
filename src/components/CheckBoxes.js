import React from 'react';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Tooltip from '@mui/material/Tooltip';

export default function CheckBoxes(props) {
   return (
      <FormControl
         component='fieldset'
         style={{border: 'none', width: '360px', margin: '5px auto 15px'}}
      >
         <FormLabel component='legend'>Options</FormLabel>
         <FormGroup row>
            <FormControlLabel 
               label='Water'
               control={
                  <Checkbox
                     name='chkWater'
                     checked={props.state.chkWater}
                     onChange={props.handleChange}
                     inputProps={{ 'aria-label': 'controlled' }}
                  />
               }
            />
            <FormControlLabel 
               label='Ice'
               control={
                  <Checkbox
                     name='chkIce'
                     checked={props.state.chkIce}
                     onChange={props.handleChange}
                     inputProps={{ 'aria-label': 'controlled' }}
                  />
               }
            />
            <Tooltip
               title='Stirred if not checked'
               placement='right-start'
            >
               <FormControlLabel 
                  label='Shaken'
                  control={
                     <Checkbox
                        name='chkShaken'
                        checked={props.state.chkShaken}
                        onChange={props.handleChange}
                        inputProps={{ 'aria-label': 'controlled' }}
                     />
                  }
               />
            </Tooltip>
         </FormGroup>
      </FormControl>
   )
}
