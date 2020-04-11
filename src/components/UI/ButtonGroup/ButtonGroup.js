import React from 'react';
import {ButtonToolbar, ButtonGroup, Button} from "react-bootstrap";


const ButtonGroupAnimation = (props) => {

    return(
        <ButtonToolbar
    className="justify-content-between button-group-animation"
    aria-label="animation time"
  >
    <ButtonGroup aria-label="First group">
      <Button onClick={props.changeTime} value="10" variant="danger">10ms</Button>{' '}
      <Button onClick={props.changeTime} value="50" variant="danger">50ms</Button>{' '}
      <Button onClick={props.changeTime} value="100" variant="danger">0.1s</Button>{' '}
      <Button onClick={props.changeTime} value="500" variant="danger">0.5s</Button>
    </ButtonGroup>
  </ButtonToolbar>
    )
}

export default ButtonGroupAnimation;
