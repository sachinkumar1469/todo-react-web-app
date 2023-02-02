import React, { useState } from 'react';
import "./taskItem.css";

function TaskItem({item,currSelected,setCurrSelected}) {
  const [active,setActive] = useState(item.completed);
  return (
    <div className={`headings ${currSelected == item.id-1 ? "selected" : ""}`} onClick={()=>{setCurrSelected(item.id-1)}}>
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
