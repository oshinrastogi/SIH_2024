import React from 'react';
import { Card } from 'react-bootstrap';
import './CardComponent.css'; // Import the CSS file

const CardComponent = ({ title, imgSrc, text, listItems, links }) => {
  return (
    <Card className="custom-card">
      <Card.Img variant="top" src={imgSrc || "https://via.placeholder.com/150"} alt="Card image cap" className="custom-card-img" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
      <ul className="list-group list-group-flush">
        {listItems.map((item, index) => (
          <li className="list-group-item" key={index}>{item}</li>
        ))}
      </ul>
      <Card.Body>
        {links.map((link, index) => (
          <Card.Link href={link.href} key={index}>{link.text}</Card.Link>
        ))}
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
