import React from 'react';
import NavBar from './components/NavBar';
import EachPost from './components/EachPost'
import Router from './components/Router'
const App= () => {
  return (
    <div className="App">
      <NavBar />
      <Router/>
    </div>
  );
}

export default App;
