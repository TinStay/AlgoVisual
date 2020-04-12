import React,{useState} from 'react';
import './App.css';

// Containers 
import Algorithms from './containers/AlgorithmsVizualizer/AlgorithmsVisualizer';

// Components
import Navigationbar from './components/Navigation/Navigationbar';
import Jumbotron from './components/Jumbotron/Jumbotron';


function App() {

  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? "dark-mode": "light-mode"}>
      <Navigationbar
      isDarkModeOn={darkMode} 
      toggleDarkMode={() => setDarkMode(prevMode => !prevMode)}/>
      <Jumbotron />
     <Algorithms></Algorithms>
    </div>
  );
}

export default App;
