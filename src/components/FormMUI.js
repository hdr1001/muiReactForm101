import React from 'react';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
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
      this.setState(() => ({ [event.target.id]: event.target.value }));
   }

   render() {
      return (
         <FormControl>
            <TextField
               id='txtName'
               label='Name'
               variant='outlined'
               size='small'
               margin='dense'
               value={this.state.txtName}
               onChange={this.handleChange}
            />
            <ButtonGroup variant='contained' >
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
