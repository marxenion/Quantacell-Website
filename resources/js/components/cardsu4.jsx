import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Himage2 from "./Images/gaming.jpg";
import '../../css/cardsu.css'
import React from 'react';
import KimK from './Images/kimk.webp';


var sectionStyle = {
    backgroundImage: `url(${Himage2})`,
    width: '18rem',
    backgroundSize: 'cover',
    backgroundPosition:'center',
  }

  var sectionStyle2 = {
    backgroundImage: `url(${KimK})`,
    width: '18rem',
    backgroundSize: 'cover',
    backgroundPosition:'center',
  }

function Card4() {
  return (
    <Card className = "card" style={sectionStyle}>
    
      <Card.Body className = "card-content">
        <Card.Title className = "card-title">Gaming</Card.Title>
        <Card.Text className = "card-body">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

function TCard4() {
  return (
    <Card className = "card2" style={sectionStyle2}>
    
      <Card.Body className = "card-content2">
        <Card.Title className = "card-title2">Kim Kardashian</Card.Title>
        <Card.Text className = "card-body2">
          Omg its like so amazing.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}


export {Card4,TCard4};