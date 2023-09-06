import React from "react";
import Card from "react-bootstrap/Card";

const SingleBook = ({ book }) => (
  <Card style={{ width: "30px" }}>
    <Card.Img src={book.image} alt={book.title} />
    <Card.Body>
      <Card.Title>{book.title}</Card.Title>
    </Card.Body>
  </Card>
);

export default SingleBook;
