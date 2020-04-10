import React, { PureComponent } from 'react';
import Slider from '../../components/UI/Slider/Slider';

// import MenuItem from '@material-ui/core/MenuItem';
// import Select from '@material-ui/core/Select';
// import InputLabel from '@material-ui/core/InputLabel';

// import classes from './AlgorithmsVisualizer.module.css'
import * as algorithms from '../../components/Algorithms/AlgorithmFunctions';

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

const ANIMATION_SPEED_MS = 10;

const NUMBER_OF_ARRAY_BARS = 70;

const PRIMARY_COLOR = '#6a89cc';

const SECONDARY_COLOR = '#eb2f06';


class Algorithms extends PureComponent{
    state={
        array: [],
        visualizerWidth: 0
    }

    componentDidMount(){
        this.newArray();
        
        
    }

    newArray = () =>{
        let array = [];
         
        for(let i =0; i < NUMBER_OF_ARRAY_BARS; i++){
            array.push(getRandomArbitrary(5, 300));
        }

        const visualizerWidth = document.getElementById("visualizer").offsetWidth
        console.log(this.state.visualizerWidth)

        this.setState({
            array: array,
            visualizerWidth: visualizerWidth
        })
    }

    mergeSort() {
        const animations = algorithms.getMergeSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName('array-bar');
          const isColorChange = i % 3 !== 2;

          if (isColorChange) {
            // Changing colors of the starting and the smallest array elements animation
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;

            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            }, i * ANIMATION_SPEED_MS);
          } else {
            setTimeout(() => {
            // Overwriting the array numbers --- sorting them
              const [barOneIdx, newHeight] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              barOneStyle.height = `${newHeight}px`;
            }, i * ANIMATION_SPEED_MS);
          }
        }
      }

      changeValue = (e) =>{
          return console.log(e.target.value)
      }


    render(){
       
        

        const arrayVisualization = this.state.array.map((num, idx) =>{
            return <div key={idx} 
            className='array-bar' 
            style={{height: `${num}px`}}>

            </div>
        })

        return (
            <div className='visualizer-container text-center'>
             <h1 className='yellow mt-4'>Visualizer</h1>
             <h4 className="white mt-4">Visualize how different sorting algorithms work under the hood. </h4>
                <div className='visualizer' id='visualizer'>
                    {arrayVisualization}
                </div>
                <div className='buttons row'>
                    <div className="col-lg-6 ">
                        <Slider change={this.changeValue}/>
                        <button className='new-array float-left' onClick={() => this.newArray()}>Generate new array</button>
                        
                    </div>
                    <div className="col-lg-6">
                        <button className='button' onClick={() => this.mergeSort()}>Merge sort</button>
                        <button className='button' onClick={() => this.mergeSort()}>Selection Sort</button>
                        <button className='button' onClick={() => this.mergeSort()}>Bubble sort</button>
                        <button className='button' onClick={() => this.mergeSort()}>Quick sort</button>
                    </div>
                    
                </div>
                {/* <div>
                <InputLabel id="demo-simple-select-label">Sorting algorithm</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value=''
                    onChange=''
                    >
                        <MenuItem onClick={() => this.mergeSort()} >Merge sort</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </div> */}

            </div>
          );
    }
  
}


export default Algorithms;

