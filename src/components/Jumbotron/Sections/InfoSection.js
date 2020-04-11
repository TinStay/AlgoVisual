import React from 'react';

const InfoSection = (props) =>{

    
    return(
        <div className=" section">
            <h1 className={props.heading =="Visualizer" ? "yellow" : 
            props.heading =="Code" ? "red": "blue"}>{props.heading}</h1>
            <div className=" row text-center mt-4">
                <div className="col-xl-6 ">
                    <img className="section-image" src={props.img} alt={props.heading}/>
                </div>
                <div className="col-xl-6 text-xl-left">
                    <p>{props.text}</p>
                </div>
                
               
            </div>
            <button style={{backgroundColor: props.btnColor}} className="btn">Go to {props.heading}</button>
        </div>
    )
}

export default InfoSection;
