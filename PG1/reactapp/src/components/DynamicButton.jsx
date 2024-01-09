import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function DynamicButton() {

const [name, setName] = useState("");
const [predictedage, setPredictedAge] = useState (0);

const fetchData = () => {
 Axios.get(`https://api.agify.io?name=${name}`)
 .then((res)=> setPredictedAge(res.data.age));
}

useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className='dynamicButton'>
    <input placeholder = "write your Name" onChange={(event) => {setName(event.target.value)}}>

    </input>
    <button onClick= {fetchData}>Predict Age</button> 
    <h1> Predicted Age: {predictedage}</h1>
    </div>
  )
}

export default DynamicButton