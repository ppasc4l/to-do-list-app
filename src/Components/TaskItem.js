import React from 'react';
import '../css/taskItem.css';
import { Card, FormGroup, Checkbox, FormControlLabel, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const TaskItem = ({tasks, onClick}) => {
  return (
    <div className="card-container">
      {tasks.map(item => (
        <Card className="card-style" key={item}>
          <div></div>
          <FormControlLabel key={item} control={<Checkbox />} label={item} value={item} />
          <IconButton onClick={e => onClick(item)}>
            <CloseIcon/>
          </IconButton>
        </Card>
      ))}
    </div>
  );
}

export default TaskItem;