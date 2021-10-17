import { createTheme } from '@mui/material/styles';
import { blueGrey, blue } from '@mui/material/colors';

const theme = createTheme({
   palette: {
     primary: {
       main: blueGrey[500],
     },
     secondary: {
       main: blue[600],
     }
   }
 });
 
export default theme;
