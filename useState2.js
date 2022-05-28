import React, { useState } from 'react';

const HooksDisplay1 = () => {

  const [displayText1, setDisplayText1] = useState('Hello number 1');

  const [counter1, setCounter1] = useState(0);

  return (
    <div className="hooks2">
      <h2>Hooks Display 2</h2>
      <input type='text' placeholder='enter text' onChange={(event) => {
       setDisplayText1(event.target.value)}} /><br />
      Text = {displayText1}
      <hr />
      <button onClick={() => {
        setCounter1(counter1 + 1);
      }}>Increment Counter</button>
      Counter = {counter1}<br /><br /><br />
      <button onClick={() => {
        setCounter1(counter1 - 1);
      }}>Decrement Counter</button><br /><br />
    </div>
  );
}

export default HooksDisplay1;
