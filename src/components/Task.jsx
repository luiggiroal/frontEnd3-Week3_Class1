import TaskStyle from '../styles/Task.module.css'

const Task = ({task, list, setList}) => {
  return (
    <div className={TaskStyle.taskContainer} >
      <button onClick={() => setList([...list, task])}>{task}</button>
    </div>
  )
}

export default Task
