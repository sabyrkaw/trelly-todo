import { useEffect, useState } from 'react'

export const TaskList = () => {
  const [selectedTaskId, setSelectedTaskId] = useState(null)
  const [tasks, setTasks] = useState(null)

  const priorities = ['#fff', '#ffd7b5', '#ffb38a', '#ff9248', '#ff6700']

  useEffect(() => {
    fetch('https://trelly.it-incubator.app/api/1.0/boards/tasks', {
      headers: {
        'api-key': import.meta.env.VITE_API_KEY,
      },
    }).then(res => res.json())
      .then((task) => setTasks(task.data))
  }, [])

  if (tasks === null) return <h1>Загрузка...</h1>

  if (tasks.length === 0) return <h1>Задачи отсутствуют</h1>

  return (
    <ul>
      {tasks.map((task) => (
        <li
          key={task.id}
          onClick={() => {
            setSelectedTaskId(task.id)
            // setBoardId(task.attributes.boardId)
          }}
          style={{
            backgroundColor: priorities[task.attributes.priority],
            border: `2px solid ${task.id === selectedTaskId ? 'blue' : 'transparent'}`,
          }}
        >
          <p>
            <b>Заголовок: </b>
            <span
              style={{
                textDecorationLine: task.attributes.status ? 'line-through' : 'none',
              }}
            >
              {task.attributes.title}
            </span>
          </p>
          <p>
            <b>Статус: </b>
            <input
              type="checkbox"
              defaultChecked={task.attributes.status}
            />
          </p>
          <p>
            <b>Дата создания задачи: </b>
            <span>{new Date(task.attributes.addedAt).toLocaleDateString()}</span>
          </p>
        </li>
      ))}
    </ul>
  )
}