import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Search from './components/Search.jsx';

const App = () => {
  const [name, setName] = useState('Jacky');

  return (
    <div>
      <h1>MyRecipePal</h1>
      <Search/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));