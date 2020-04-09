import React from 'react';
import './App.css';

// Containers 
import Algorithms from './containers/AlgorithmsVizualizer/AlgorithmsVisualizer';

// Components
import Navigationbar from './components/Navigation/Navigationbar';


function App() {
  return (
    <div className="App">
      <Navigationbar/>
     <Algorithms></Algorithms>
    </div>
  );
}

export default App;
