import React from 'react';
import './App.css';

// Containers 
import Algorithms from './containers/AlgorithmsVizualizer/AlgorithmsVisualizer';

// Components
import Navigationbar from './components/Navigation/Navigationbar';
import Jumbotron from './components/Jumbotron/Jumbotron';


function App() {
  return (
    <div className="App">
      <Navigationbar/>
      <Jumbotron />
     <Algorithms></Algorithms>
    </div>
  );
}

export default App;
