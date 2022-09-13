import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">

      {/* header */}
      <Header/>
      {/* app body */}

      <div className='App__body'>
      {/* sidebar */}
        <Sidebar/>




      {/* feed */}
      {/* widget */}

      </div>
     
    </div>
  );
}

export default App;
