import React from 'react';
import '../css/taskItem.css';
import { Card, FormGroup, Checkbox, FormControlLabel, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const TaskItem = ({tasks, onClick, moveUp, moveDown}) => {

  // function downArrowOnly(props){
  //   return(
  //   <IconButton onClick={e => moveDown(props.index)} disabled={props.index == tasks.length - 1}>
  //     <ArrowDropDownIcon/>
  //   </IconButton>
  //   )
  // }

  // function upArrowOnly(props){
  //   return(
  //   <IconButton onClick={e => moveUp(props.index)} index={props.index} disabled={props.index === 0}>
  //     <ArrowDropUpIcon />
  //   </IconButton>
  //   )
  // }

  // function returnBothArrows(props){
  //   return(
  //   <>
  //     <IconButton onClick={e => moveUp(props.index)} index={props.index} disabled={props.index === 0}>
  //       <ArrowDropUpIcon />
  //     </IconButton>
  //     <IconButton onClick={e => moveDown(props.index)} disabled={props.index === tasks.length - 1}>
  //      <ArrowDropDownIcon/>
  //     </IconButton>
  //   </>
  //   )
  // }

  // function NavArrows(props){
  //   if(props.index === 0){
  //     return <upArrowOnly index={props.index}/>
  //   }
  //   else if(props.index === tasks.length - 1 ){
  //     return <downArrowOnly index={props.index} />
  //   }
  //   else{
  //     return <returnBothArrows index={props.index} />
  //   }
  // }

  return (
    <div className="card-container">
      {tasks.map((item, index) => (
        <Card className="card-style" key={item}>
          <div>
            <IconButton onClick={e => moveUp(index)} index={index} disabled={index === 0}>
              <ArrowDropUpIcon />
            </IconButton>
            <IconButton onClick={e => moveDown(index)} disabled={index == tasks.length - 1}>
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