import React, { useState } from 'react';
import { data } from '../data';

export default function Type() {

  const [ty, setTy] = useState(data.filters["Property type"])

  function toggle(e) {
    setTy(ps => {
      return (
        ps.map((type, index) => {
          if (index == e.target.id) {
            return ({
              ...type,
              checked: !type.checked
            })
          } else {
            return type;
          }
        })
      )
    })
  }
  // console.log(ty);

  return (
    <div id='types'>
      <h3>Property type</h3>
      <ul>
        {ty.map((type, idx) => <label key={idx}><input type="checkbox" id={idx} checked={type.checked} onChange={toggle} />{type.name}</label>)}
      </ul>
    </div>
  );
}