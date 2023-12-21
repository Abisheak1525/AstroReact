import React from 'react';
import './Main.css';
import Button from '@mui/material/Button';
import PublicIcon from '@mui/icons-material/Public';
import PersonIcon from '@mui/icons-material/Person';
import HotelIcon from '@mui/icons-material/Hotel';
import SearchIcon from '@mui/icons-material/Search';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea, CardActions } from '@mui/material';

import dubai from './Images/dubai2.webp';
import Singapore from './Images/Singapore.webp';
import bangkok from './Images/bangkok.webp';
import chennai from './Images/chennai.webp';
import mumbai from './Images/mumbai.webp';
import delhi from './Images/delhi.webp';
import Search from './Search';


export default function Main() {
  return (
    <div id="divide">
      <body>
        <center>

        <Button variant="contained" className="btns" startIcon={<PublicIcon />} style={{ marginRight: '10px' }}>
          Explore everywhere
        </Button>
        <Button variant="contained" className="btns" startIcon={<PersonIcon />} style={{ marginRight: '10px' }}>
          Guide
        </Button>
        <Button variant="contained" className="btns" startIcon={<HotelIcon />} style={{ marginRight: '10px' }}>
          Hotels
        </Button>
        <Button variant="contained" className="btns" startIcon={<SearchIcon />} >
          Find Places
        </Button>
        <br/><br/><br/>
        

        {/* ------------------------------------------------------------------------ */}
        
        
        <table id="table_bg">
          
            <h1 id="let">
              Try new places and enjoy your trip
            </h1>
            <h4 id="let1">
              Need Inspiration? Our new search tool will
            </h4>
            <h4 id="let1">
              surprise you with destination and hidden gems.
            </h4>
            <br/>
            <button href="#" id="try" >Try it out</button>
        
        </table>
        <br/><br/>
{/* <-------------------------- Search ------------------------> */}

        <table>
          <center>
          <h1>Millions of cheap flights. One simple search.</h1>
          <Search/>
          </center>
          <br/>
          <br/>
{/* <-------------------------- Place ------------------------> */}

        </table>

        <table id="places">

          <tr>

            <td id="card">

    <Card sx={{ maxWidth: 345 }} id="boxx"> 
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={dubai}
          alt="Dubai"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Dubai
          </Typography>
          <Typography variant="body2" color="text.secondary">
             Dubai is the most populous city in the United Arab Emirates (UAE)
             and the capital of the Emirate of Dubai, the most populated of the country's seven emirates.
             
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Book Now
        </Button>
      </CardActions>
    </Card>
            </td>

            <td  id="card">

            <Card sx={{ maxWidth: 345 }} id="boxx">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={Singapore}
          alt="Singapore"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Singapore
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Singapore is a city-state located in Southeast Asia, off the southern tip of the Malay Peninsula.
          And the most beautiful country to visit
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Book Now
        </Button>
      </CardActions>
    </Card>

            </td>  

            <td  id="card">

                
            <Card sx={{ maxWidth: 345 }} id="boxx">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={bangkok}
          alt="Bangkok"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Bangkok
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Bangkok, officially known in Thai as Krung Thep Maha Nakhon and colloquially
           as Krung Thep, is the capital and most populous city of Thailand, And is the most beautiful country in Thai
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
         Book Now
        </Button>
      </CardActions>
    </Card>

            </td>

          </tr>

          <tr   id="card">

            <td>

            <Card sx={{ maxWidth: 345 }} id="boxx">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={ delhi}
          alt="Delhi"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Delhi
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Delhi, officially the National Capital Territory (NCT) of Delhi, is a city and a union
             territory of India containing New Delhi, the capital of India.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Book Now
        </Button>
      </CardActions>
    </Card>

            </td>

            <td  id="card">

            <Card sx={{ maxWidth: 345 }} id="boxx">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={ mumbai}
          alt="Mumbai"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Mumbai
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Mumbai, also known as Bombay, is the capital city of the Indian state of Maharashtra.01 It is the de facto financial
           center and the most populous city of India with an estimated population of 1.25 crore. 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Book Now
        </Button>
      </CardActions>
    </Card>

            </td>

            <td  id="card">
            <Card sx={{ maxWidth: 345 }} id="boxx">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={chennai}
          alt="chennai"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Chennai
          </Typography>
          <Typography variant="body2" color="text.secondary">Chennai is the capital city of Tamil Nadu,
           located on the Coromandel Coast of the Bay of Bengal. It is the state's primate city and the sixth-most populous city in India
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Book Now
        </Button>
      </CardActions>
    </Card> 

            </td>

          </tr>
        </table>
        </center>
      </body>
    </div>
  );
}
