import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./Movie.css";
import { movieCard } from "./moviesReducer";
const Movie = ({ name, url, description, rating, size }) => {
  const dispatch = useDispatch();
  return (
    <div className="main-card">
      <Link
        onClick={() =>
          dispatch(movieCard({ name, url, description, rating, size }))
        }
        to="/movie"
      >
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
      </Link>
    </div>
  );
};

export default Movie;
