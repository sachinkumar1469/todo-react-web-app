import React, { useEffect, useState } from 'react';
import "./taskManager.css";

import {deleteData,postData,updateData} from '../config/api'


// This function is a react functional component resposible for managing the task
// This component is used for adding, editing and deleting the task.
function TaskManager({currSelected,data,setData,setCurrSelected}) {

  // let todoData;

  // if(currSelected == -1){
  //   todoData={
  //     userId : data[data.length-1].userId,
  //     id: data[data.length-1].id + 1,
  //     title:"",
  //     date:""
  //   }
  // } else {
  //   todoData={...data[currSelected-1],date: new Date().toUTCString()};
  // }

  const [title,setTitle] = useState("");

  // setTitle((prev,)=>{})

  const addTask = ()=>{
    
    if(currSelected>-1){
        const indx = data.findIndex(item=>item.id == currSelected);
        setData((currData)=>{
          currData[indx].title = title;
          return [...currData];
        })
    }

    if(currSelected == -1){
      const task = {
        userId:4,
        id:data.length+1,
        title,
        completed:false
      }
      setData((prevData)=>{
        prevData.unshift(task);
        return [...prevData]
      })
    }
  }

  const onTaskDelete = ()=>{
    const indx = data.findIndex(item=>item.id == currSelected);
    deleteData(currSelected)
    .then(res=>{
      setData((prevData)=>{
        console.log("Index before deleting",indx);
        prevData.push(indx,1);
        return [...prevData];
      })
      setCurrSelected(-1);
      setTitle("");
      // setTitle("");
    })
    .catch(err=>{
      console.log(err);
    })
  }

  useEffect(()=>{

    if(currSelected>=0){
      const idx = data.findIndex(item=>item.id==currSelected);
      console.log("Index is ",idx);
      setTitle(data[idx]?.title);
    } else {
      setTitle("");
    }
    
  },[currSelected])

  // const [date,setDate] = useState(todoData.date);

  // console.log(date);
  

  return (
    <div className='taskManager'>
      <h2>Manage Task</h2>
      <form action="">
        <input type="text" name="task" id="" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='Task'/>
        {/* <input type="date" name="" id="" /> */}
        <button type='button' onClick={addTask}>{currSelected < 0 ? "Add Task" : "Edit Task"}</button>
        {currSelected>-1 && <button type='button' onClick={onTaskDelete}>Delete</button>}
      </form>

    </div>
  )
}

export default TaskManager
