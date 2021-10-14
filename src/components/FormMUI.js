import React from 'react';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import Tooltip from '@mui/material/Tooltip';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

export default class FormMUI extends React.Component {
   constructor(props) {
      super(props);

      this.state = { ...props.iniState };

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleReset = this.handleReset.bind(this);
      this.handleChange = this.handleChange.bind(this);
   }

   handleSubmit() {
      alert(JSON.stringify(this.state));
   }

   handleReset() {
      this.setState(() => ({ ...this.props.iniState }));
   }

   handleChange(event) {
      if(event.target.type === 'radio') {
         this.setState(() => ({ [event.target.name]: event.target.value }))
      }
      else if(event.target.type === 'checkbox') {
         this.setState(() => ({ [event.target.id]: event.target.checked }))
      }
      else {
         this.setState(() => ({ [event.target.id]: event.target.value }));
      }
   }

   render() {
      return (
         <FormControl
            component='form'
            style={{margin: '20px', padding: '15px'}}
         >

            <FormControl
               component='fieldset'
               style={{border: 'none', width: '360px', margin: '5px auto 15px'}}
            >
               <TextField
                  id='txtName' label='Name' 
                  size='small' margin='dense' fullWidth
                  value={this.state.txtName}
                  onChange={this.handleChange}
               />
               <TextField
                  id='txtAlias' label='Alias'
                  size='small' margin='dense' fullWidth
                  value={this.state.txtAlias} disabled
               />
               <TextField
                  id='txtAdr' label='Address'
                  size='small' margin='dense' fullWidth
                  value={this.state.txtAdr}
                  onChange={this.handleChange}
                  inputProps={{ maxLength: 64 }}
               />
               <TextField
                  id='txtCity' label='City'
                  size='small' margin='dense' fullWidth
                  value={this.state.txtCity}
                  onChange={this.handleChange}
               />
               <TextField
                  id='pwdCode' label='Secret code'
                  size='small'margin='dense' fullWidth
                  value={this.state.pwdCode}
                  onChange={this.handleChange}
                  type='password'
               />
            </FormControl>

            <FormControl
               component='fieldset'
               style={{border: 'none', width: '360px', margin: '5px auto 15px'}}
            >
               <FormLabel component='legend'>Gender</FormLabel>
               <RadioGroup
                  aria-label='gender'
                  id='optGender'
                  value={this.state.optGender}
                  onChange={this.handleChange}
                  row
               >
                  <FormControlLabel value='F' name='optGender' control={<Radio />} label='Female' />
                  <FormControlLabel value='M' name='optGender' control={<Radio />} label='Male' />
               </RadioGroup>
            </FormControl>

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
                        id='chkWater'
                        checked={this.state.chkWater}
                        onChange={this.handleChange}
                        inputProps={{ 'aria-label': 'controlled' }}
                     />
                  }
               />
               <FormControlLabel 
                  label='Ice'
                  control={
                     <Checkbox
                        id='chkIce'
                        checked={this.state.chkIce}
                        onChange={this.handleChange}
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
                           id='chkShaken'
                           checked={this.state.chkShaken}
                           onChange={this.handleChange}
                           inputProps={{ 'aria-label': 'controlled' }}
                        />
                  }
               />
               </Tooltip>
               </FormGroup>
            </FormControl>

            <ButtonGroup
               variant='contained'
               disableElevation
               style={{border: 'none', width: '360px', margin: '5px auto 15px'}}
            >
               <Button onClick={this.handleSubmit}>
                  Submit
               </Button>
               <Button onClick={this.handleReset}>
                  Reset
               </Button>
            </ButtonGroup>
         </FormControl>
      )
   }
}
