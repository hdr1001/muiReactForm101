import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { customStyle } from './style';

export default function Buttons(props) {
   return (
      <Stack
         direction='row'
         spacing={2}
         sx={{
            ...customStyle,
            mb: 1,
            mx: 'auto'
         }}
      >
         <Button
            variant='contained'
            color='secondary'
            onClick={props.handleSubmit}
         >
            Submit
         </Button>
         <Button
            variant='contained'
            color='secondary'
            onClick={props.handleReset}
         >
            Reset
         </Button>
      </Stack>
   )
}
