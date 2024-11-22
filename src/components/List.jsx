const List = ({list}) => {
  return (
    <div className="list-container" >
      <h3>Lista de Tareas</h3>
      <ul>
        {list.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  )
}

export default List
