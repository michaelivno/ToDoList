import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import TaskList from './components/TaskList';
import {Jumbotron} from 'react-bootstrap';
import {Icon, Button} from 'semantic-ui-react';
import NewTask from './components/NewTask';
import DropdownExampleSimple from './components/SortChois'
import SortChois from "./components/SortChois";

//
// all the CRUD REST functions in this component
// i have used Semantic.ui library
//
class App extends Component {

    state = {
        tasks: [],
    };

    //This Function sent new task to Spring to add it
    submitTask = (title) => {
        const createTaskURL = "http://localhost:8080/createTask";
        axios.post(createTaskURL, {title}).then(res => {
            let tasks = [...this.state.tasks];
            tasks.unshift(res.data);
            this.setState({tasks})
        }).catch(error => console.error(error.data))
    }

    //This Function delete task
    deleteTask = (index) => {
        const createTaskURL = "http://localhost:8080/delete";
        axios.post(createTaskURL, this.state.tasks[index]).then(res => {
            let tasks = [...this.state.tasks];
            delete tasks[index];
            this.setState({tasks})
        }).catch(err => {
            console.log("delete book error!")
        })
    }

    //This Function update the task
    updateTask = (task) => {
        const createTaskURL = "http://localhost:8080/update";
        axios.put(createTaskURL, task).then(res => {
            let tasks = [...this.state.tasks];
          let index = tasks.indexOf(task);
          tasks[index] = res.data;
             this.setState({tasks})
            console.log(task);
        }).catch(error => console.error(error.data))
    }

    getAllTasks = () => {
        const createTaskURL = "http://localhost:8080/list";
        axios.get(createTaskURL)
            .then(res => {
                this.setState({
                    tasks: this.sortByDateAndReverseTasks(res.data, "createdDate")
                });
            })
            .catch(err => {
                console.log("getTasks error!", err)
            })
    }



    deleteAllTasks = () => {
        const createTaskURL = "http://localhost:8080/deleteAll";
        axios.delete(createTaskURL)
            .catch(err => {
                console.log("delete error error!")
            })
    }

    sortByDateAndReverseTasks = (tasks, SortBy) => {
        return tasks.sort((o1, o2) => {
            return (new Date(o1[SortBy]).getMilliseconds() > new Date(o2[SortBy]).getMilliseconds()) ? o1 : o2
        }).reverse()
    }

    componentWillMount() {
        this.getAllTasks();
    }


    render() {
        return (
            <div className="App">
                <Jumbotron id='slideTop' className='jumbotron'>
                    <div className='jumbotronContetn'>
                        <h1><Icon name='book' size='large'/>ToDoList</h1>
                        <p>Wellcome to your ToDo List!</p>
                        <div className='ui two buttons deleteAndAddButtonsContains' id='addDel'>
                            <NewTask submitTask={(taskName) => this.submitTask(taskName)}/>
                            <Button className={"deleteAllButton"} negative size="medium"
                                    onClick={this.deleteAllTasks}> Delete All Tasks</Button>
                        </div>
                    </div>
                    <div align={'center'}>
                        < SortChois sortChois={(SortBy) =>  this.sortByDateAndReverseTasks(this.props.tasks,SortBy)}/>
                    </div>
                </Jumbotron>
                <TaskList className='taskList' tasks={this.state.tasks}
                          deleteTask={(index) => this.deleteTask(index)}
                          updateTask={(task) => this.updateTask(task)}/>
            </div>
        );
    }
}


export default App;