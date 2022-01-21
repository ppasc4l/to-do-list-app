import './css/App.css';
import React, { Component } from 'react';
import { Box, TextField, FormGroup, Checkbox, FormControlLabel } from '@mui/material';
import TaskItem from './Components/TaskItem';
import AddTask from './Components/AddTask';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: ["Gaming", "Gaming again"],
      newTaskInput: ""
    }
  }

  submitTask=()=>{
    console.log(this.state.newTaskInput)

    const tasks = this.state.tasks;
    tasks.push(this.state.newTaskInput)
    this.setState({
      tasks: tasks,
      newTaskInput: ''
    })
    
  }

  handleChange=(e)=>{
    this.setState({newTaskInput: e.target.value})
    console.log(e.target.value)
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Header</h1>
        </header>

        <body>
          <div>
{/* //c */}
            <FormGroup sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
              {/* <TaskItem tasks={this.state.tasks} /> */}
              {this.state.tasks.map(item => (
                <FormControlLabel key={item} control={<Checkbox />} label={item} />
              ))}
            </FormGroup>

            {/* <AddTask onClick={submitTask}/> */}
            <FormGroup sx={{ display: 'grid', gridTemplateRows: 'repeat(3, 1fr)' }}>
              <TextField type="text" id="newTask" id="newTaskInput" variant="outlined" label="outlined" onChange={this.handleChange} value={this.state.newTaskInput}/>
              <button id="newTaskSubmit" onClick={this.submitTask}>Submit</button>
            </FormGroup>

          </div>
        </body>
      </div>
    );
  }
}

export default App;
