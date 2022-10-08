import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const MovieData = ({ name, url, description, rating, size }) => {
  return (
    <div>
      <Card style={{ width: "18rem", textDecoration: "none" }}>
        <Card.Img variant="top" style={{ maxHeight: 200 }} src={url} />
        <Card.Body>
          <Card.Title style={{ textDecoration: "none" }}>{name} </Card.Title>
          <Card.Text>{description}</Card.Text>
          <span>{rating}</span>
          <span className="fa fa-star checked"></span>
          <br></br>
          <span>Size:</span>
          <span>{size}</span>
          <br></br>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieData;
