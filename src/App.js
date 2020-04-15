import React,{useState} from 'react';
import './App.css';

// Containers 
import Algorithms from './containers/AlgorithmsVizualizer/AlgorithmsVisualizer';
import CodeSection from './containers/Code/Code';

// Components
import Navigationbar from './components/Navigation/Navigationbar';
import Jumbotron from './components/Jumbotron/Jumbotron';
import TimeComplexity from './components/TimeComplexity/TimeComplexity';
import Footer from './components/Footer/Footer';


function App() {

  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? "dark-mode": "light-mode"}>
      <Navigationbar
      isDarkModeOn={darkMode} 
      toggleDarkMode={() => setDarkMode(prevMode => !prevMode)}/>
      <Jumbotron />
     <Algorithms></Algorithms>
     <CodeSection />
     <TimeComplexity />
     <Footer />
    </div>
  );
}

export default App;
