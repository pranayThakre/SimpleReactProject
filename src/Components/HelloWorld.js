import React, { useState } from 'react';

const HelloWorld = () => {
//test comment 101
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  //test commit 102
  // function sayHello() {
  //   alert('Hello, World! for the last time');
  // }
//testing if git pull work as expected
// conflict resolution
  return (
    <div style={{ textAlign: 'center' }}>
      <p>This is to test React App...</p>
      <div>
        <div>
          First Name:
          <input type="text" placeholder="type First Name" onChange={e => setFirstName(e.target.value)}></input>
        </div>
        <br />
        <div>
          Last Name:
          <input type="text" placeholder="type Last Name" onChange={e => setLastName(e.target.value)}></input>
        </div>
        <br />     <br />
        Your name is <b>{firstName} {lastName}</b>
      </div>
      <br />
      <button >Submit</button>
    </div>
  );
};

export default HelloWorld;
