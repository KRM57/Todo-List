import React,{useState} from 'react'
export default function TaskInput({addTask}) {
  const [task,setTask]=useState('');
  const handleInputValue=(event)=>{
    setTask(event.target.value);
  }
  const handleAddTask=(event)=>{
    event.preventDefault();
    if(task.trim()==='')return;
    addTask(task);
    setTask('');
  }
  return (
    <form className='inputField' onSubmit={handleAddTask}>
      <input type='text' value={task} placeholder='Add items' onChange={handleInputValue}></input>
      <button>+</button>
    </form>
  )
}
