import React from 'react';
import FormControl from '@mui/material/FormControl';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import TextFields from './TextFields';
import RadioBtns from './RadioBtns';
import CheckBoxes from './CheckBoxes';
import SelectMenu from './SelectMenu';

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
      if(event.target.type === 'checkbox') {
         this.setState(() => ({ [event.target.name]: event.target.checked }))
      }
      else {
         this.setState(() => ({ [event.target.name]: event.target.value }))
      }
   }

   render() {
      return (
         <FormControl
            component='form'
            sx={{ border: 1, borderColor: 'primary.main', borderRadius: 3 }}
            style={{margin: '20px', padding: '15px'}}
         >

            <TextFields state={this.state} handleChange={this.handleChange} />

            <RadioBtns state={this.state} handleChange={this.handleChange} />

            <CheckBoxes state={this.state} handleChange={this.handleChange} />

            <SelectMenu state={this.state} handleChange={this.handleChange} />

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
