import { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskItems from "./components/TaskItems"
import { Stats } from "./components/Stats";
function App() {
  const [toDoList,setToDoList]=useState([]);
  const addTask=(taskName)=>{
    const newTask={taskName,checked:false};
    setToDoList([...toDoList,newTask])
  };
  const deleteTask =(deleteTaskName)=>{
    setToDoList(toDoList.filter(task=>task.taskName !== deleteTaskName))
  }
  const toggleCheck =(taskName)=>{
     setToDoList((prevToDoList) => prevToDoList.map
      (task=> task.taskName === taskName ?{...task,checked: !task.checked}:task),);
  }
  console.log(toDoList);
  return (
    <>
      <div className="container">
        <h1>TASK MANAGER</h1>
        <TaskInput addTask={addTask}/>
        <div className="toDoList">
          <span>To do</span>
          <ul className="list-items">
          {toDoList.map((task, key) => (
            <TaskItems task={task} key={key} deleteTask={deleteTask} toggleCheck={toggleCheck}/>
          ))}
          </ul>
          {toDoList.length===0 ? (<p className="notify"> You are done!</p>):null}
        </div>
        <Stats toDoList={toDoList}/>
      </div>
    </>
  );
}

export default App;
