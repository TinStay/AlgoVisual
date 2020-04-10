import React from 'react';

const InfoSection = (props) =>{

    
    return(
        <div className=" section">
            <h1 >{props.heading}</h1>
            <div className=" row text-center mt-4">
                <div className="col-xl-6 ">
                    <img className="section-image" src={props.img} alt={props.heading}/>
                </div>
                <div className="col-xl-6 ">
                    <p>{props.text}</p>
                </div>
                
               
            </div>
            <button style={{border: `2px solid ${props.btnColor}`}} className="btn">Go to {props.heading}</button>
        </div>
    )
}

export default InfoSection;

commit