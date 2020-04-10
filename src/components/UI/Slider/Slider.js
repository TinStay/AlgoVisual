import React from "react";
// import ReactBootstrapSlider from 'react-bootstrap-slider';

const Slider = (props) => {

    return (
      <div className="my-2">
        <label for="customRange3">Number of elements</label>
        <input onChange={props.change} type="range" class="custom-range" min="5" max="100" step="1" id="customRange3"/>
      </div>
    );
}

export default Slider;


commit