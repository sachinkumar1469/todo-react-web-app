import React, { useState } from 'react';
import "./taskItem.css";



// TaskItem is react functional component responsible for rendering the task item
// This component accepts three props item,currSelected,setCurrSelected
function TaskItem({item,currSelected,setCurrSelected}) {
  console.log(currSelected);

  // This state is used to toggle the completion status of task
  const [active,setActive] = useState(item.completed);
  return (
    <div className={`headings ${currSelected == item.id ? "selected" : ""}`} onClick={()=>{setCurrSelected(item.id)}}>
        <div className="title">
          <div>
            <input type="checkbox" name="todo" id={`todo${item.userId+item.id}`} />
          </div>
          <label htmlFor={`todo${item.userId+item.id}`}>{item?.title}</label>
        </div>
        <div className='deadline'>{new Date().toUTCString().substring(0,14)}</div>
        <div>
          <div className={`status ${active}`} onClick={(e)=>{e.stopPropagation();setActive(!active)}}>{active ? "Completed" : "Active"}</div>
        </div>
    </div>
  )
}

export default TaskItem;
