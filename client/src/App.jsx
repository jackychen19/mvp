import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [name, setName] = useState('Jacky');

  return (
    <div>Hello, {name}!</div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));