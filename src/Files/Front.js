import * as React from 'react';
import './Front.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import HotelIcon from '@mui/icons-material/Hotel';
import PublicIcon from '@mui/icons-material/Public';
import Place from './Place';
import { Link } from 'react-router-dom';

export default function Front() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Astro Flight booking
            </Typography>
            <Link to="/Login" style={{textDecoration:"none" ,color:"white"}}>

              <Button color="inherit">Login</Button>
            </Link>
              <Link to="/Sign" style={{textDecoration:"none",color:"white"}}>

              <Button color="inherit">Sign In</Button>
              </Link>
            
          </Toolbar>
        </AppBar>
      </Box>

      <table id="table_btn">
        <tr>
          <td id="bt">
            
              <Button variant="contained" className="btn">
                <DriveEtaIcon /> Travel
              </Button>
            
          </td>
          <td id="bt">
            
              <Button variant="contained" className="btn">
                <HotelIcon /> Hotel
              </Button>
          
          </td>
          <td id="bt">
            
              <Button variant="contained" className="btn">
                <PublicIcon /> Explore
              </Button>
            
          </td>
        </tr>
      </table>

      <center>
        <h1>Explore new Places . . . .</h1>
      </center>

      <Place/>

      <center>
        <Link to="/Home"  style={{textDecoration:"none"}}>
          <button id="now">Book now...</button>
        </Link>
        
      </center>
    </div>
  );
}
