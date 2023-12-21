import React from "react";
import ReactCardSlider from "react-card-slider-component";
import "./Place.css";
import dubai from './Images/dubai2.webp';
import Singapore from './Images/Singapore.webp';
import bangkok from './Images/bangkok.webp';
import delhi from './Images/delhi.webp';
import mumbai from './Images/mumbai.webp';
import chennai from './Images/chennai.webp';
import madurai from './Images/madurai.jpeg';
import newyork from './Images/newyork.jpg';

function Place() {
  const slides = [

    {
      image: dubai,
      title: "Dubai",
      clickEvent: () => {}
    },

    {
      image: Singapore,
      title: "Singapore",
      clickEvent: () => {} 
    },

    {
      image: bangkok,
      title: "Bangkok",
      clickEvent: () => {} 
    },

    {
      image: delhi,
      title: "Delhi",
      clickEvent: () => {} 
    },

    {
      image: mumbai,
      title: "Mumbai",
      clickEvent: () => {} 
    },

    {
      image: chennai,
      title: "Chennai",
      clickEvent: () => {} 
    },

    {
      image: madurai,
      title: "Madurai",
      clickEvent: () => {} 
    },

    {
      image: newyork,
      title: "New York",
      clickEvent: () => {} 
    }

  ];

  return (
    <div id="slides">
      <ReactCardSlider slides={slides} />
    </div>
  );

}

export default Place;
