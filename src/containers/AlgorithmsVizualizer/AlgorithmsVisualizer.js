import React, { PureComponent } from 'react';

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

import classes from './AlgorithmsVisualizer.module.css'
import * as algorithms from '../../components/Algorithms/AlgorithmFunctions';

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

const ANIMATION_SPEED_MS = 10;

const NUMBER_OF_ARRAY_BARS = 100;

const PRIMARY_COLOR = 'rgb(163, 255, 58)';

const SECONDARY_COLOR = 'red';


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
            array.push(getRandomArbitrary(5, 100));
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
          const arrayBars = document.getElementsByClassName(classes.ArrayBar);
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


    render(){
       
        

        const arrayVisualization = this.state.array.map((num, idx) =>{
            return <div key={idx} 
            className={classes.ArrayBar} 
            style={{height: `${num}px`}}>

            </div>
        })

        return (
            <div className={classes.Container}>
             <h1>Still in progress!</h1>
                <div className={classes.Visualizer} id='visualizer'>
                    {arrayVisualization}
                </div>
                <div className={classes.Buttons}>
                    <button className="btn btn-primary" onClick={() => this.newArray()}>New array</button>
                    <button className="btn btn-secondary" onClick={() => this.mergeSort()}>Merge sort</button>
                    
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
