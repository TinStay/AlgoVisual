import React from 'react';
import InfoSection from './InfoSection';

import VisualizerImg from '../../../assets/visualizerImg.png';
import CodeImg from '../../../assets/code.png';
import SpaceImg from '../../../assets/space.png';

const Section = (props) =>{

    
    return(
        <div className="sections row mx-4">
                    <div className="col-xl-4">
                    <InfoSection 
                    heading="Visualizer"
                    img={VisualizerImg}
                    btnColor='#e2b810'
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
                    heading="Time Complexity"
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
    )
}

export default Section;
