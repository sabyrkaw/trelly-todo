import { useEffect, useState } from 'react'

const priorities = ['#fff', '#ffd7b5', '#ffb38a', '#ff9248', '#ff6700']

function App() {
  const [selectedTaskId, setSelectedTaskId] = useState(null)
  const [selectedTask, setSelectedTask] = useState(null)
  const [tasks, setTasks] = useState(null)

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
    <>
      <button
        onClick={() => {
          setSelectedTaskId(null)
          setSelectedTask(null)
        }}
      >
        Сбросить выделение
      </button>

      <div style={{ display: 'flex', columnGap: '30px' }}>
        <ul>
          {tasks.map((task) => (
            <li
              key={task.id}
              onClick={() => {
                const boardId = task.attributes.boardId

                setSelectedTaskId(task.id)
                setSelectedTask(null)

                fetch(
                  `https://trelly.it-incubator.app/api/1.0/boards/${boardId}/tasks/${task.id}`,
                  {
                    headers: {
                      'api-key': import.meta.env.VITE_API_KEY,
                    },
                  },
                ).then(res => res.json())
                  .then(task => setSelectedTask(task.data))
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
        <div>
          <h2>Task details</h2>

          {selectedTaskId === null && 'Task is not selected'}
          {selectedTaskId !== null && selectedTask === null && 'Loading...'}
          {selectedTask && (
            <>
              <p>
                <b>Title:</b> {selectedTask.attributes.title}
              </p>
              <p>
                <b>Board:</b> {selectedTask.attributes.boardTitle}
              </p>
              <p>
                <b>Description:</b>{' '}
                {selectedTask.attributes.description || 'no description'}
              </p>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default App
