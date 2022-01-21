import React, {useState} from 'react';
import { Box, TextField } from '@mui/material';

const AddTask = ({state}) =>{
    return (
      <Box sx={{ display: 'grid', gridTemplateRows: 'repeat(3, 1fr)' }}>
        <TextField type="text" id="newTask" id="newTaskInput" variant="outlined" label="outlined"/>
        <button id="newTaskSubmit" onClick={i => this.props.onClick()}>Submit</button>
      </Box>
    );
}

export default AddTask;