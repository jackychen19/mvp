import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const App = () => {
  const [name, setName] = useState('Jacky');

  const search = () => {
    console.log('searched!');
    axios('/recipes', {params: {'food': 'kimchi fried rice'}})
      .then(response => console.log(response.data))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <div>Hello, {name}!</div>
      <button onClick={search}>Test</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));