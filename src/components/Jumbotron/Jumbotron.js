import React from 'react';
import Section from './Sections/Sections';



const Jumbotron = () =>{

    
    return(
        <div>
            <div className='jumbotron container' id="jumbotron">
                <h1 className="heading">Welcome to <span className="yellow">Al</span>
                <span className="red">go</span><span className="blue">Visual</span></h1>
                <h3 className="info">
                    The place where you can study some of the most popular sorting algorithms.
                </h3>
            </div>
            <div className="container-fluid">
                <Section />
            </div>
        </div>
    )
}

export default Jumbotron;
