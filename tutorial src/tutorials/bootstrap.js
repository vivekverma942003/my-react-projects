import React from "react";
import {Button} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
function Mybootstrap(){



    return(

        <div>
            <h1>this is the bootstrap file</h1>

        <Button onClick={()=>alert("you have clicked wrong button")}>click me for magic</Button>

        <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}y
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button> <Button variant="link">Link</Button>

        </div>
    );
}
export default Mybootstrap;