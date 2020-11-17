import React, { Component } from "react"

import fantasy from "../data/fantasy.json"

import {Container, Row, Col, Card, Button} from "react-bootstrap"

class LatesRelease extends Component{
  
  render(){
    
    console.log("fantasy;", fantasy)

    return(
      <Container>
        <Row>
          {fantasy.map(book=>
        <Col xs={4} className="my-5">
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={book.img} />
  <Card.Body>
    <Card.Title> {book.title} </Card.Title>
    <Card.Text>
      {book.category}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
        </Col>
)}
</Row>

    </Container>
    )
}
}

export default LatesRelease