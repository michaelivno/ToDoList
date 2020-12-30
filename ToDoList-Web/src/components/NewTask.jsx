import React, {Component} from 'react';
import {Modal} from 'react-bootstrap';
import {Button, Form, Input} from 'semantic-ui-react';
import axios from 'axios';

export default class NewTask extends Component {
    state = {
        show: false,
        titleError: false,
        title: ''
    }

    handleClose = () => {
        this.setState({show: false});
    }

    handleShow = () => {
        this.setState({show: true});
    }

    submitTitle = () => {
        if (!this.state.title) {
            this.setState({titleError: true});
            return;
        }
        this.props.submitTask(this.state.title);
        this.handleClose()
    }


    render() {
        return (
            <div>
                <Button primary onClick={this.handleShow}> Add New Task</Button>
                <Modal className='newTaskModule' show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Hi! So you have new a ToDo task?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group>
                                <div className="ui form">
                                    <div className="field">
                                        <label>User Input</label>
                                        <input className="ui fluid icon input"
                                               control={Input} onChange={text => {
                                            this.setState({title: text.target.value})
                                        }} label={'Task Description'} placeholder={'Enter Task Description'}/>
                                    </div>
                                </div>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button color='red' onClick={this.handleClose}>Close</Button>
                        <Button color='green' onClick={this.submitTitle}>Add</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
