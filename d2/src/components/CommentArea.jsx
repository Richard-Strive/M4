import React from "react";

import { Modal, Button, Card } from "react-bootstrap";

class CommentArea extends React.Component {
  render() {
    return (
      <>
        <Modal
          show={this.props.show}
          onHide={this.props.onClose}
          className="text-center"
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.props.book.title}</Modal.Body>

          <Card style={{ width: "18rem" }} className="text-center">
            <Card.Img variant="top" src={this.props.book.img} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.onClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.props.onClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        <CommentList />
        <AddCommentList />
      </>
    );
  }
}

export default CommentArea;
