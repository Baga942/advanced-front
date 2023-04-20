import React from 'react';

function NumberChecker({ number }) {
  if (number < 3) {
    return <p>no</p>;
  } else {
    return <p>yes</p>; // don't render anything if number is 3 or greater
  }
}

export default NumberChecker;
