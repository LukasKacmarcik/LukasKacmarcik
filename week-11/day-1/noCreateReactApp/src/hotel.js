import React from 'react';

export default function Hotel(props) {

  function handleClick() {
    alert(`Sorry ${props.name.toUpperCase()} is unavailable right now`)
  }

  return (
    <div className='hotel'>
      <h3>{props.name}</h3>
      <img src={props.imageURL} className="image" />
      <div className='about'>
        <p className='description'>{props.description}</p>
        <button type='button' onClick={handleClick}>Book Now!</button>
      </div>
    </div>
  )
}