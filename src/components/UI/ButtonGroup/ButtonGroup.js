import React from 'react';
import {ButtonToolbar, ButtonGroup, Button} from "react-bootstrap";


const ButtonGroupAnimation = (props) => {

  let currentAnimationSpeed = `${props.animationSpeed}ms`;

  if(props.animationSpeed === "100"){
    currentAnimationSpeed = '0.1s'
  }
  if(props.animationSpeed === "500"){
    currentAnimationSpeed = '0.5s'
  }

    return(
        <ButtonToolbar
    className="justify-content-center button-group-animation"
    aria-label="animation time"
  >
    <ButtonGroup aria-label="First group">
      <Button onClick={props.changeTime} value="10" variant="danger">10ms</Button>{' '}
      <Button onClick={props.changeTime} value="50" variant="danger">50ms</Button>{' '}
      <Button onClick={props.changeTime} value="100" variant="danger">0.1s</Button>{' '}
      <Button onClick={props.changeTime} value="500" variant="danger">0.5s</Button>
    </ButtonGroup>
    <h5 className="ml-sm-3 my-md-auto mt-3">Current speed: {currentAnimationSpeed}</h5>
  </ButtonToolbar>
    )
}

export default ButtonGroupAnimation;
