import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Search from './components/Search.jsx';

const App = () => {
  const [name, setName] = useState('Jacky');

  return (
    <div>
      <div className="hero container">
        <div id="title">MyRecipePal</div>
        <Search/>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));