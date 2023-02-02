import { useEffect, useState } from 'react';
import './App.css';
import TaskManager from './component/TaskManager';
import Tasks from './component/Tasks';

import {getData} from './config/api';

function App() {
  const [data,setData] = useState();

  const [loading,setLoading] = useState(true);

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
      {!loading && <Tasks data={data} currSelected={currSelected} setCurrSelected={setCurrSelected}/>}
      {!loading && <TaskManager setData={setData} setCurrSelected={setCurrSelected} currSelected={currSelected} data={data}/>}
    </div>
  );
}

export default App;
