import { useEffect, useState } from 'react';
import './App.css';
import TaskManager from './component/TaskManager';
import Tasks from './component/Tasks';

import {getData} from './config/api';

function App() {
  const [data,setData] = useState();

  const [currSelected,setCurrSelected] = useState();

  useEffect(()=>{
    getData()
    .then(result=>{
      console.log(result.data);
    })
    .catch(err=>{
      console.log(err);
    })
  },[]);

  return (
    <div className="App">
      <Tasks data={data} setCurrSelected={setCurrSelected}/>
      <TaskManager setData={setData}/>
    </div>
  );
}

export default App;
