import * as React from "react";
import { Card , ProgressBar} from "react-bootstrap";

function Skillcard (props:any) {

    return (
        <div>
        <Card style={{ width: "18rem" }}>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body>
            <Card.Title>{props.tittle}</Card.Title>
            <Card.Text></Card.Text>
            <ProgressBar now={props.percent} />;
          </Card.Body>
        </Card>
      </div>
    );
  
}
export default Skillcard
