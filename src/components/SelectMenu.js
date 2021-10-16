import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function SelectMenu(props) {
   return (
      <FormControl
         component='fieldset'
         style={{border: 'none', width: '360px', margin: '5px auto 15px'}}
      >
         <InputLabel id='labelMenu'>Menu options</InputLabel>
         <Select
            labelId='labelMenu'
            name='selectMenuOpts'
            label='Menu options'
            margin='dense'
            value={props.state.selectMenuOpts}
            onChange={props.handleChange}
         >
            <MenuItem value='a'>A la cart</MenuItem>
            <MenuItem value='s'>Special</MenuItem>
            <MenuItem value='c'>Catch of the day</MenuItem>
            <MenuItem value='v'>Vegetarian</MenuItem>
         </Select>
      </FormControl>
   )
}
