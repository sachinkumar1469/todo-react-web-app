import React from 'react';
import './tasks.css';
import TaskItem from './TaskItem';
import {BsPlusLg} from 'react-icons/bs'


// Tasks is a react functional component
// It will accept three props data,currSelected,setCurrSelected
function Tasks({data,currSelected,setCurrSelected}) {
  return (
    <div className='tasks'>
      <h2>Tasks <span> <BsPlusLg onClick={()=>{setCurrSelected(-1)}}/> </span></h2>
      <div className="content">
        <div className="headings">
          <p>Task Name</p>
          <p>Deadline</p>
          <p>Status</p>
        </div>
        {/* Iterating over data array and calling TaskItem component for each task item */}
        {data.map(item=>{return <TaskItem key={data.userId+""+data.id+Math.random().toString()} item={item} currSelected={currSelected} setCurrSelected={setCurrSelected}/>})}
      </div>
    </div>
  )
}

export default Tasks
