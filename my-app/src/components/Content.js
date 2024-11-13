// necessary inputs
import React from 'react';

const Content = () => {
  // holds logic for "Hello World!" and Time
  return (
    <div>
      <h1>Hello World!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
}

export default Content;