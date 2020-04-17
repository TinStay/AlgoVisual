import React, { PureComponent } from 'react';
import Slider from '../../components/UI/Slider/Slider';
import ButtonGroupAnimation from '../../components/UI/ButtonGroup/ButtonGroup';

// import MenuItem from '@material-ui/core/MenuItem';
// import Select from '@material-ui/core/Select';
// import InputLabel from '@material-ui/core/InputLabel';

// import classes from './AlgorithmsVisualizer.module.css'
import * as algorithms from '../../components/Algorithms/AlgorithmFunctions';

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}



const PRIMARY_COLOR = '#6a89cc';

const SECONDARY_COLOR = '#e74c3c';


class AlgorithmsVisualizer extends PureComponent{
    state={
        array: [],
        states: [],
        arrayBars: 50,
        visualizerWidth: 0,
        animationSpeed: 10,
    
    }

    componentDidMount(){
        this.newArray(this.state.arrayBars);
        
        
    }

    // componentShouldUpdate(prevState){
    //     if(prevState.arrayBars !== this.state.arrayBars){
    //         this.newArray(this.state.arrayBars)
    //     }
    // }


   
    newArray = (arrayBars) =>{

        let array = [];
        let states= [];
         
        for(let i =0; i < arrayBars; i++){
            array.push(parseInt(getRandomArbitrary(5, 350)));
            states[i] = -1;

        }

        const visualizer = document.getElementById("visualizer")

        // Get the visualizer width to set the width for array elements
        const visualizerWidth = visualizer.offsetWidth

        // Set visualizer height
        visualizer.style.height = `${350 + 90}px`; 
        

        this.setState({
            array: array,
            states: states,
            visualizerWidth: visualizerWidth,
        })
    }

   

    async mergeSort() {

        const animations = algorithms.getMergeSortAnimations(this.state.array);

        let i = 0;
        while(i < animations.length) {

        const j = i;
        const arrayBars = document.getElementsByClassName('array-bar');
        const isColorChange = i % 3 !== 2;

        if (isColorChange) {
        // Changing colors of the starting and the smallest array elements animation
        const [barOneIdx, barTwoIdx] = animations[j];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;

        setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
        }, i * this.state.animationSpeed);
        } else {
        setTimeout(() => {
        // Overwriting the array numbers --- sorting them
            const [barOneIdx, newHeight] = animations[j];
            const barOneStyle = arrayBars[barOneIdx].style;
            barOneStyle.height = `${newHeight}px`;
        }, i * this.state.animationSpeed);
        }

        i++;
        }

        

        // await setTimeout(() =>{
        //     this.setState({disabled: false});
        // }, i * this.state.animationSpeed);
      }

    quickSort(){
        let array = this.state.array
        let animations = algorithms.getQuicksortAnimations(array)
        console.log(animations)

        let i = 0;
        while(i < animations.length) {

        const j = i;
        const animation = animations[j]
        const arrayBars = document.getElementsByClassName('array-bar');
        const isColorChange = i % 3 !== 2;

        if (isColorChange) {
        // Changing colors of the starting and the smallest array elements animation
        const [barOneIdx, barTwoIdx] = animation;
        
        const barThreeIdx = animation[animation.length-1]
        // console.log("barThreeIdx", barThreeIdx)
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const barThreeStyle = arrayBars[barThreeIdx].style;
        
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;

        setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
            if(i % 3 == 0){
                barThreeStyle.backgroundColor = 'green';
            }
            
        }, i * this.state.animationSpeed);
        } 
        if(i % 3 == 2){
        setTimeout(() => {
        // Overwriting the array numbers --- sorting them
            const [barOneIdx, barTwoIdx] = animation;
            const barOneValue = animation[2];
            const barTwoValue = animation[3];

            const barThreeIdx = animation[animation.length-1]
                        
            const barOneStyle = arrayBars[barOneIdx].style;
            barOneStyle.height = `${barTwoValue}px`;
            
            const barTwoStyle = arrayBars[barTwoIdx].style;
            barTwoStyle.height = `${barOneValue}px`;

            const barThreeStyle = arrayBars[barThreeIdx].style;
            barThreeStyle.backgroundColor = PRIMARY_COLOR;
        }, i * this.state.animationSpeed);
        }

        i++;
        }
        
      }

    

      

      changeArrayNumber = (e) =>{
        this.setState({
            arrayBars: e.target.value
        })

        this.newArray(e.target.value)
      }

      changeTimeHandler = (e) =>{
        this.setState({ animationSpeed: e.target.value})
      }


    render(){
        
        

       
        const width = (this.state.visualizerWidth-40)/this.state.arrayBars - 5;
        let arrayVisualization = <p className="blue">Too much elements. Try decreasing the number of elements.</p>

        if(width >= 2){
            arrayVisualization = this.state.array.map((num, idx) =>{  
                return <div key={idx} 
                className='array-bar' 
                style={{height: `${num}px`, 
                width: `${width}px`}}>
                </div>   
            })
        }



        return (
            <div id="visualizer-container" className='visualizer-container text-center'>
                
             <div className="mt-4">
                <h1 className='yellow mt-4 letter-spacing'>Visualizer</h1>
                <h4 className="white mt-4">Visualize how different sorting algorithms work under the hood. </h4>
             </div>
                <div className='visualizer d-flex align-items-center flex-column' id='visualizer'>
                    <div className="bottom-aligned mt-auto">
                        {arrayVisualization}
                    </div>
                    
                </div>
                <div className='buttons row'>
                    <div className="col-lg-6 ">
                        <Slider change={this.changeArrayNumber}/>
                       <div className="row text-center">
                       <button className='new-array col-md-6' onClick={() => this.newArray(this.state.arrayBars)}>Generate new array</button>
                        <ButtonGroupAnimation className="col-12 col-md-6 " changeTime={this.changeTimeHandler}/>
                       </div>
                    </div>
                    <div className="col-lg-6">
                        <button className='button'  onClick={() => this.mergeSort()}>Mergesort</button>
                        <button className='button' onClick={() => this.quickSort()}>Quicksort</button>
                        <button className='button' onClick={() => this.mergeSort()}>Bubble sort</button>
                        <button className='button'  onClick={() => this.mergeSort()}>Quick sort</button>
                    </div>
                    
                </div>

            </div>
          );
    }
  
}


export default AlgorithmsVisualizer;

