import React from 'react';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { customStyle } from './style';

export default function TextFields(props) {
   return (
      <FormControl
         component='fieldset'
         sx={customStyle}
      >
         <TextField
            name='txtName' label='Name' 
            size='small' margin='dense' fullWidth
            value={props.state.txtName}
            onChange={props.handleChange}
         />
         <TextField
            name='txtAlias' label='Alias'
            size='small' margin='dense' fullWidth
            value={props.state.txtAlias} disabled
         />
         <TextField
            name='txtAdr' label='Address'
            size='small' margin='dense' fullWidth
            value={props.state.txtAdr}
            onChange={props.handleChange}
            inputProps={{ maxLength: 64 }}
         />
         <TextField
            name='txtCity' label='City'
            size='small' margin='dense' fullWidth
            value={props.state.txtCity}
            onChange={props.handleChange}
         />
         <TextField
            name='pwdCode' label='Secret code'
            size='small'margin='dense' fullWidth
            value={props.state.pwdCode}
            onChange={props.handleChange}
            type='password'
         />
      </FormControl>
   )
}
