import React from "react";
import style from "./card_seller.module.css";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

const Card_seller = (props) => {
  return (
    <div className="main_Card">
      <Card style={{ width: "18rem" }}>
        <Card.Header>
          <Card.Title>{props.title}</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Card_seller;
