import React from 'react';
import ReactDOM from 'react-dom';
import FormMUI from './components/FormMUI';

const iniStateForm = {
   txtName: 'James Bond'
};

ReactDOM.render(<FormMUI iniState={iniStateForm} />, document.getElementById('root'));
