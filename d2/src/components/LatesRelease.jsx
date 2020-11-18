import React, { Component } from "react"

import fantasy from "../data/fantasy.json"
import history from "../data/history.json"

import {Container, Row, Col, Card, Button, Dropdown} from "react-bootstrap"

class LatesRelease extends Component{
  state={
    listLibri: history,
  }
  render(){
    
    console.log(this.state)

    return(
      <Container>
        <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Dropdown Button
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item onClick={()=> this.setState({listLibri: fantasy})}>Fantasy</Dropdown.Item>
    <Dropdown.Item onClick={()=> this.setState({listLibri: history})}>History</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

        <Row>
          {this.state.listLibri.map(book=>
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