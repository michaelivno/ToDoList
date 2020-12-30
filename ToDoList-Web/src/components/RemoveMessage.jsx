import React from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'semantic-ui-react';

export default class RemoveMessage extends React.PureComponent {


  state = {
    show: false
  };

  handleHide = this.handleHide.bind(this);

  handleHide() {
    this.setState({ show: false });
  }
  
  render() {
    return (

      <div className="modal-container" >
        <Button size="medium" inverted color="red" onClick={() => { this.setState({ show: true }) }} >Remove</Button>

        <Modal
          show={this.state.show}
          onHide={this.handleHide}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">
              Delete Book Modal
            </Modal.Title>
          </Modal.Header>
          <Modal.Body >
            <h1>Do you whant to Remove this Book?</h1>
          </Modal.Body>
          <Modal.Footer>
            <Button  color='red' onClick={this.handleHide}>No</Button>
            <Button color='green' onClick={() => { this.handleHide(); this.props.deleteEvent(); }} >Yes</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}