import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { Button, Form, Input } from 'semantic-ui-react';
import axios from "axios";




export default class EditTask extends React.Component {

    state = {
        show: false,
        error: "",
        chois:false,
        title: ''

    };

    handleClose = this.handleClose.bind(this);

    handleClose() {
       this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    sendEditedBook = () => {
        this.props.edit(this.state)
        this.handleClose()
    }


    render() {
        return (
            <div>
                <Button id="editButton" inverted color='green' size='medium' onClick={() => {this.handleShow()} }>Edit</Button>

                <Modal show={this.state.show === true} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Title </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group >
                                <Form.Field control={Input}  onChange={text => { (this.props.task.title = text.target.value) }}  label='Task Title' placeholder={this.props.task.title}  />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button color='red' onClick={this.handleClose}>Close</Button>
                        <Button  color='green' onClick={()  => this.props.updateTask(this.props.task.title)}>Submit</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

