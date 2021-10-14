import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@mui/material/CssBaseline';
import FormMUI from './components/FormMUI';

const iniStateForm = {
   txtName: 'James Bond',
   txtAlias: '007',
   txtAdr: '',
   txtCity: '',
   pwdCode: '',
   optGender: 'F',
   chkWater: false,
   chkIce: false,
   chkShaken: true
};

ReactDOM.render(
   <>
      <CssBaseline />
      <FormMUI iniState={iniStateForm} />
   </>,

   document.getElementById('root')
);
