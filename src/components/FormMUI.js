import React from 'react';
import FormControl from '@mui/material/FormControl';
import TextFields from './TextFields';
import RadioBtns from './RadioBtns';
import CheckBoxes from './CheckBoxes';
import SelectMenu from './SelectMenu';
import Buttons from './Buttons';

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
            sx={{
               width: '400px',
               m: 2.5,
               px: 2,
               py: 1.5,
               border: 1,
               borderColor: 'primary.light',
               borderRadius: 3
            }}
         >

            <TextFields state={this.state} handleChange={this.handleChange} />

            <RadioBtns state={this.state} handleChange={this.handleChange} />

            <CheckBoxes state={this.state} handleChange={this.handleChange} />

            <SelectMenu state={this.state} handleChange={this.handleChange} />

            <Buttons handleSubmit={this.handleSubmit} handleReset={this.handleReset} />

         </FormControl>
      )
   }
}
