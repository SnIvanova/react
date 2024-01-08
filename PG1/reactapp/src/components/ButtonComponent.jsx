import React, { useState, useEffect } from 'react';
import Axios from 'axios';

export default function ButtonComponent(props) {
  const [catFact, setCatFact] = useState('');

  const getCatFact = () => {
    Axios.get('https://catfact.ninja/fact').then((res) => {
      setCatFact(res.data.fact);
    });
  };

  useEffect(() => {
    getCatFact();
  }, []);

  return (
        <div>
          <button onClick={getCatFact}>
            {props.text}
          </button>
          <p>
            {catFact && <span> - {catFact}</span>}
          </p>
        </div>
    );
}