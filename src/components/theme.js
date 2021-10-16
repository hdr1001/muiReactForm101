import { createTheme } from '@mui/material/styles';
import { blueGrey, teal } from '@mui/material/colors';

const theme = createTheme({
   palette: {
     primary: {
       main: blueGrey[500],
     },
     secondary: {
       main: teal[500],
     }
   }
 });
 
export default theme;
