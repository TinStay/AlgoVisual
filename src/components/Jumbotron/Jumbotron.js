import React from 'react';
import InfoSection from './Sections/InfoSection';
import VisualizerImg from '../../assets/visualizerImg.png';
import CodeImg from '../../assets/code.png';
import SpaceImg from '../../assets/space.png';


const Jumbotron = () =>{

    
    return(
        <div>
            <div className='jumbotron container'>
                <h1 className="heading">Welcome to <span className="yellow">Al</span>
                <span className="red">go</span><span className="blue">Visual</span></h1>
                <h3 className="info">
                    The website where you can fully understand sorting algorithms and the concepts behind them.
                </h3>
            </div>
            <div className="container-fluid">
                <div className="sections row">
                    <div className="col-xl-4">
                    <InfoSection 
                    heading="Visualizer"
                    img={VisualizerImg}
                    btnColor='#f1c40f'
                    text="Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Accusamus possimus eaque nulla
                     dolore eveniet quis voluptas ut tenetur laboriosam.
                      Harum eveniet ad perferendis veritatis cupiditate 
                      accusantium debitis recusandae?.
                    "/>
                    </div>
                    <div className="col-xl-4">
                    <InfoSection 
                    heading="Code"
                    img={CodeImg}
                    btnColor="#e74c3c"
                    text="Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Accusamus possimus eaque nulla
                     dolore eveniet quis voluptas ut tenetur laboriosam.
                      Harum eveniet ad perferendis veritatis cupiditate 
                      accusantium debitis recusandae?.
                    "/>
                    </div>
                    <div className="col-xl-4">
                    <InfoSection 
                    heading="Time and space complexity"
                    img={SpaceImg}
                    btnColor="#3498db"
                    text="Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Accusamus possimus eaque nulla
                     dolore eveniet quis voluptas ut tenetur laboriosam.
                      Harum eveniet ad perferendis veritatis cupiditate 
                      accusantium debitis recusandae?.
                    "/>
                    </div>
                    
            
                </div>
            </div>
        </div>
    )
}

export default Jumbotron;

commit