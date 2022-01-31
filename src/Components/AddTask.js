import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Box, Button, FormControl, FormGroup, TextField } from '@mui/material';
import '../css/AddTask.css';

const AddTask = ({ onClick, onSubmit }) => {

  const [newTaskInput, setNewTaskInput] = useState("");
  const { handleSubmit } = useForm();

  const valueChange = (e) =>{
    setNewTaskInput(e.target.value);
    console.log(newTaskInput);
  }

  return (
      <form onSubmit={handleSubmit((e)=>onSubmit(newTaskInput))} noValidate>
        <FormGroup>
          <TextField type="text" id="newTask" variant="outlined" label="New Task" defaultValue={newTaskInput} onChange={e => valueChange(e)} />
          <Button id="newTaskSubmit" onClick={(e)=>onSubmit(newTaskInput)} disabled={!newTaskInput}>Submit</Button>
        </FormGroup>
      </form>
  );
}

export default AddTask;