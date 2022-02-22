import "./css/App.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Box,
  Card,
  TextField,
  FormGroup,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import TaskItem from "./Components/TaskItem";
import AddTask from "./Components/AddTask";
import * as taskActions from "../../redux/actions/taskActions";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: ["Eat Food", "Clean Room"],
      newTaskInput: "",
    };
  }

  componentDidMount() {
    const { tasks, actions } = this.props;
    if (tasks.length === 0) {
      actions.loadTasks().catch((error) => {
        alert("Loading Tasks Failed" + error);
      });
    }
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch(taskActions.createTask(this.state.task));
  };

  deleteTask = (value) => {
    const tasks = this.state.tasks;

    const newTasks = tasks.filter((word) => word !== value);
    this.setState({
      tasks: newTasks,
    });
  };

  moveUp = (index) => {
    let tasks = this.state.tasks;

    const temp = tasks[index];
    tasks[index] = tasks[index - 1];
    tasks[index - 1] = temp;

    this.setState({ tasks: tasks });
  };

  moveDown = (index) => {
    let tasks = this.state.tasks;

    const temp = tasks[index];
    tasks[index] = tasks[index + 1];
    tasks[index + 1] = temp;

    this.setState({ tasks: tasks });
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1>Header</h1>
        </header>

        <body className="to-do-list-wrapper">
          <div className="to-do-list-body">
            <FormGroup sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
              <TaskItem
                tasks={this.state.tasks}
                onClick={this.deleteTask}
                moveUp={this.moveUp}
                moveDown={this.moveDown}
              />
            </FormGroup>

            <AddTask onClick={this.submitTask} onSubmit={this.onSubmit} />
          </div>
        </body>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks,
  };
}

function mapDispatchToProps(dispatch) {}

export default connect(mapStateToProps, mapDispatchToProps)(App);
