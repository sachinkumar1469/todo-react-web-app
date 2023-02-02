import { useEffect, useState } from 'react';
import './App.css';
import TaskManager from './component/TaskManager';
import Tasks from './component/Tasks';

import {getData} from './config/api';

function App() {

  // This useState is used to manage the tasks data array
  const [data,setData] = useState();

  // This state is used to check whether data is loaded or not
  const [loading,setLoading] = useState(true);

  // This state is used to manage currSelected task
  const [currSelected,setCurrSelected] = useState(-1);

  useEffect(()=>{
    getData()
    .then(result=>{
      console.log(result.data);
      setData(result.data);
      setLoading(false);
    })
    .catch(err=>{
      console.log(err);
    })
  },[]);

  return (
    <div className="App">
      <div className="sidebar">
        <p>T</p>
        <p>O</p>
        <p>D</p>
        <p>O</p>
      </div>

      {/* Tasks and TaskManager are conditionaly rendered whenever js finishes fetching data from API */}
      {/* Task Componenet is used to display the tasks */}
      {!loading && <Tasks data={data} currSelected={currSelected} setCurrSelected={setCurrSelected}/>}
      {/* TaskManager component is used to edit, delete and add tasks */}
      {!loading && <TaskManager setData={setData} setCurrSelected={setCurrSelected} currSelected={currSelected} data={data}/>}
    </div>
  );
}

export default App;
