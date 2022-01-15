import logo from './logo.svg';
import './css/App.css';
import React from 'react';
import { FormGroup, Checkbox, FormControlLabel } from '@mui/material';

class AddTask extends React.Component{
  // addNewTask(){

  // }

  render(){
   return(
     <div>
      <input type="text" id="newTask" />
      <button onClick={i => this.props.onClick()}>submit</button>
     </div>
    );
  }
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tasks: ["Gaming"]
    }
  }

  render(){
    return (
      <div className="App">
        <header>
          <h1>Header</h1>
        </header>

        <body>
          <div>

            <FormGroup>
              {this.state.tasks.map(item => (
                <FormControlLabel key={item} control={<Checkbox />} label={item} />
                // <li key={item}>{item}</li>
              ))}
            </FormGroup>

            <AddTask />
          
          </div>
        </body>
      </div>
    );
  }
}

export default App;
