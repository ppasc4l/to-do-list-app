import './css/App.css';
import React, { Component } from 'react';
import { Box, Card, TextField, FormGroup, Checkbox, FormControlLabel } from '@mui/material';
import TaskItem from './Components/TaskItem';
import AddTask from './Components/AddTask';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: ["Eat Food", "Clean Room"],
      newTaskInput: ""
    }
  }

  onSubmit = (value) =>{
    
    console.log(value);
    const tasks = this.state.tasks;

    if(!tasks.includes(value)){
      tasks.push(value);
      this.setState({
        tasks: tasks,
      });
    }
    else{
      console.log("Element already on list. Try again.");
    }
  }

  deleteTask= (value) =>{
      const tasks = this.state.tasks;

      const newTasks = tasks.filter(word => word !== value);
      this.setState({
        tasks: newTasks
      });
  }

  moveUp = (index) =>{
    let tasks = this.state.tasks;

    const temp = tasks[index];
    tasks[index] = tasks[index - 1]; 
    tasks[index - 1] = temp;

    this.setState({tasks: tasks});
  }

  moveDown = (index) =>{
    let tasks = this.state.tasks;

    const temp = tasks[index];
    tasks[index] = tasks[index + 1]; 
    tasks[index + 1] = temp;

    this.setState({tasks: tasks})
    
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Header</h1>
        </header>

        <body className="to-do-list-wrapper">
          <div className="to-do-list-body">

            <FormGroup sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
                <TaskItem tasks={this.state.tasks} onClick={this.deleteTask} moveUp={this.moveUp} moveDown={this.moveDown}/>
            </FormGroup>

            <AddTask onClick={this.submitTask} onSubmit={this.onSubmit} />

          </div>
        </body>
      </div>
    );
  }
}

export default App;
