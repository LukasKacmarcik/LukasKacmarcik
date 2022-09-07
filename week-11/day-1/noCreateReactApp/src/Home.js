import React from 'react';
import Rating from "./rating.js"
import { data } from '../data';
import Type from './type.js';
import Hotel from './hotel.js';
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div id='main'>
      <h1>Hotel Booking</h1>
      <h2>Hotel List</h2>
      <Link to="/game" >CLICK</Link>
      <div id='content'>
        <Rating />
        <Type />
        <div id='hotels'>
          {data.hotels.map((hotel, index) => <Hotel key={index} id={index} name={hotel.name} description={hotel.description} imageURL={hotel.imageURL} />)}
        </div>
      </div>
    </div>
  )
}