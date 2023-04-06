import React from 'react';
import './App.css';

import { Footer } from './views/footer'
import Home from './views/home/Home'

function App() {
  return (
    <div className="App">
      <Home msg='componente Home'></Home>
    </div>
  );
}

export default App;
