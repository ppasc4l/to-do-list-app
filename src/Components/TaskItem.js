import React from 'react';
import { FormGroup, Checkbox, FormControlLabel } from '@mui/material';

const TaskItem = ({tasks}) => {
  return (
    <div>
      {tasks.map(item => (
        <FormControlLabel key={item} control={<Checkbox />} label={"x"} />
      ))}
    </div>
  );
}

export default TaskItem;