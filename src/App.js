
import { useEffect, useState } from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList';

function App() {
  const [tasks,setTasks]=useState([])
  const[done,setDone]=useState(0)

  const addTask=(task)=>{
    setTasks([task,...tasks])
  }
  useEffect(()=>{
    setDone(tasks.filter(item=>item.done).length)
  },[tasks])
  const doneTask=(task)=>{
    task.done=true
    task.timeCompleted=Date.now()
    setTasks([...tasks])
  }
  const cancelTask=(task)=>{
    task.done=false
    task.timeCompleted=null
    setTasks([...tasks])
  }
  return (
                <>
                        <TodoList
                            data={tasks}
                            done={done}
                            onComplete={doneTask}
                            onAdd={addTask}
                            onCancel={cancelTask}/>

                </>
  );
}

export default App;
