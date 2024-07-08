import React from 'react'

export const Stats = ({toDoList}) => {
    let countList=toDoList.length;
  return (
    <div className='stats'>
      <p className='notify'>
        {countList === 0 ? 'You have to do it. Come on!' : `You have ${countList} tasks to finish`}
      </p>
    </div>
  )
}
