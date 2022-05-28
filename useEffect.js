import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HooksDisplay4 = () => {
  const [data, setData] = useState("");
  
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments')
    .then(response => {
      setData(response.data[0].email);
    });
  }, []);

  return (
    <div className='hooks4'>
      <h3>{data}</h3>
    </div>
  )
};

export default HooksDisplay4;
