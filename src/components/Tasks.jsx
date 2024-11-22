import { useState } from 'react'
import Task from './Task'
import List from './List'
import {tasks} from '../utils/tasks.js'


const Tasks = () => {
  const [list, setList] = useState([])
  return (
    <>
      <div className="tasks-container" >
        {tasks.map((task, index) => <Task key={index} task={task} list={list} setList={setList} />)}
      </div>
      <List list={list} />
    </>
  )
}

export default Tasks
