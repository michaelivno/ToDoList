import React, {Component} from 'react';
import {Card, Image, Grid, Segment, Container, Item, Button, Icon} from 'semantic-ui-react';
import RemoveMessage from './RemoveMessage';
import EditTaskForm from './EditTask';


class TaskItem extends Component {

    state = {
        editFormR: true,
    }

    getDateString = () => {
       return this.props.task
        && this.props.task.createdDate
        && this.props.task.createdDate.substring(0, 10)
    }

    //todo: use momentJs for dates format;
    render() {
        let task = this.props.task;
        return (
             <Container>
                 { task &&
                <Item.Group divided>
                    <Item>
                        <Item.Content>
                            <Item.Header as='a'> <span>Created Date: {this.getDateString()}</span>{' '}|{' '}
                                <span>Last Modified Date: {this.getDateString()}</span>
                            </Item.Header>

                            <Item.Description>
                                <div className='ui inverted segment '>
                                    <div>
                                        <p>{this.props.task.title}</p>
                                    </div>
                                    <Item.Meta>
                                    </Item.Meta>
                                </div>
                            </Item.Description>
                            <div className='ui two buttons'
                                 style={{display: "flex", justifyContent: "flex-end", padding: '5px'}}>
                                <EditTaskForm task={task}  updateTask={(task) => this.props.updateTask(task)}/>
                                <RemoveMessage deleteEvent={() => this.props.deleteTask()} style={{marginLeft: '5px'}}/>
                            </div>
                        </Item.Content>
                    </Item>
                </Item.Group>}
            </Container>
        );

    }

}

export default TaskItem;