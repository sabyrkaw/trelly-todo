import { useEffect, useState } from 'react'

export const TaskDetails = () => {
  const [selectedTask, setSelectedTask] = useState(null)
  const selectedTaskId = '4f310604-82b5-4afd-b9a4-ddf12dfac0a3'
  const boardId = '13923117-72de-4788-a7f0-4c42f162a5ab'

  useEffect(() => {
    if (!selectedTaskId || !boardId) return

    fetch(
      `https://trelly.it-incubator.app/api/1.0/boards/${boardId}/tasks/${selectedTaskId}`,
      {
        headers: {
          'api-key': import.meta.env.VITE_API_KEY,
        },
      },
    ).then(res => res.json())
      .then(task => setSelectedTask(task.data))
  }, [selectedTaskId, boardId])

  return (
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
  )
}