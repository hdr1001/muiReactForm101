import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './components/theme';
import FormMUI from './components/FormMUI';

const iniStateForm = {
   txtName: 'James Bond',
   txtAlias: '007',
   txtAdr: '',
   txtCity: '',
   pwdCode: '',
   optGender: 'M',
   chkWater: false,
   chkIce: false,
   chkShaken: true,
   selectMenuOpts: 's',
   hdnInp: '🤯' //No longer associated with a control
};

ReactDOM.render(
   <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
         <FormMUI iniState={iniStateForm} />
      </ThemeProvider>
   </>,

   document.getElementById('root')
);
