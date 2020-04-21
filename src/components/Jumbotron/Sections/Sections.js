import React from 'react';
import InfoSection from './InfoSection';

import VisualizerImg from '../../../assets/visualizerImg.png';
import CodeImg from '../../../assets/code.png';
import SpaceImg from '../../../assets/space.png';

const Section = (props) =>{

    
    return(
        <div className="sections row mx-4">
                    <div className="col-xl-4 col-md-6">
                    <InfoSection 
                    heading="Visualizer"
                    img={VisualizerImg}
                    btnColor='#e2b810'
                    text="The visualizer is a helpful tool for understanding how a sorting algorithm divides and sorts a list. Play with the visualizer and discover which sorting algorithms perform faster with more elements and which are not so efficient.
                    "/>
                    </div>
                    <div className="col-xl-4 col-md-6">
                    <InfoSection 
                    heading="Code"
                    img={CodeImg}
                    btnColor="#e74c3c"
                    text="In the code and explanation section you will find more information about how sorting algorithms work. 
                    Learn about the logic behind six popular algorithms and check out their code implementation in 6 different languages.
                    "/>
                    </div>
                    <div className="col-xl-4 offset-xl-0 col-md-6 offset-md-3">
                    <InfoSection 
                    heading="Time Complexity"
                    img={SpaceImg}
                    btnColor="#3498db"
                    text="Time and space complexity describe the amount of time and data it takes to run an algorithm. With the help of the 
                    big O notation, we can find which algorithms perform better and which worse in their best, average or worst cases.
                    "/>
                    </div>
                    
            
                </div>
    )
}

export default Section;
git
