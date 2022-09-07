import React, { useEffect, useState } from 'react';
import { data } from '../data';

export default function Rating() {

  const [da, setDa] = useState(data.filters["Star rating"])

  function toggle(e) {
    setDa(ps => {
      return (
        ps.map((rating, index) => {
          if (index == e.target.id) {
            return ({
              ...rating,
              checked: !rating.checked
            })
          } else {
            return rating;
          }
        })
      )
    })
  }
  // useEffect(() => {
  //   console.log(da);
  // }, [da])
  return (
    <div id='ratings'>
      <h3>Star rating</h3>
      <ul>
        {da.map((rating, idx) => <label key={idx}><input type="checkbox" id={idx} checked={rating.checked} onChange={toggle} />{rating.name}</label>)}
      </ul>
    </div>
  );
}