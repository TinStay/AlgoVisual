import React from 'react';

const InfoSection = (props) =>{

    
    return(
        <div className="section jumbotron-card">
            <h1 className={props.heading =="Visualizer" ? "yellow" : 
            props.heading =="Code" ? "red": "blue"}>{props.heading}</h1>

            <div className="row text-center mt-4">
                <div className="col-12 ">
                    <img className="section-image" src={props.img} alt={props.heading}/>
                </div>
                <div className=" col-12 text-xl-left">
                    <p>{props.text}</p>
                </div>
                
               
            </div>
            <a href={"#"+props.heading.toLowerCase().replace(/\s/g, '') +'-container'} style={{backgroundColor: props.btnColor}} className="btn">Go to {props.heading}</a>
        </div>
    )
}

export default InfoSection;
