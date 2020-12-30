import React from 'react';
import TaskItem from './TaskItem';
import {Card} from 'semantic-ui-react';

const TaskList = (props) => {
    return (
        <Card.Group className='taskList'>
            {props.tasks.map((task, index) => {
                return <TaskItem key={index} task={task} index={index}  updateTask={() => props.updateTask(task)}   deleteTask={() => props.deleteTask(index)}/>
            })}
        </Card.Group>
    );
}

export default TaskList;