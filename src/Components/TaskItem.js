import React from 'react';
import '../css/taskItem.css';
import { Card, FormGroup, Checkbox, FormControlLabel, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const TaskItem = ({tasks, onClick}) => {
  return (
    <div className="card-container">
      {tasks.map((item, index) => (
        <Card className="card-style" key={item} index={index}>
          <div>
            <IconButton>
              <ArrowDropUpIcon/>
            </IconButton>
            <IconButton>
              <ArrowDropDownIcon/>
            </IconButton>
          </div>
            <FormControlLabel control={<Checkbox />} label={item} value={item} id={item} key={item + " " + item.index} index={index}/>
          <IconButton onClick={e => onClick(item)}>
            <CloseIcon/>
          </IconButton>
        </Card>
      ))}
    </div>
  );
}

export default TaskItem;