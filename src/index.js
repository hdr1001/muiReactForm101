import React from 'react';
import ReactDOM from 'react-dom';
import FormMUI from './components/FormMUI';

const iniStateForm = {
   txtName: 'James Bond',
   txtAlias: '007',
   txtAdr: '',
   txtCity: '',
   pwdCode: '',
   optGender: 'M'
};

ReactDOM.render(<FormMUI iniState={iniStateForm} />, document.getElementById('root'));
