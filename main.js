const tasks = [
    { title: 'Купить продукты на неделю', isDone: false },
    { title: 'Полить цветы', isDone: true },
    { title: 'Сходить на тренировку', isDone: false },
]

const rootEl = document.getElementById('root')

const titleEl = document.createElement('h1')
const taskListEl = document.createElement('ul')

titleEl.append('Список дел')

tasks.forEach((task) => {
    const taskEl = document.createElement('li')
    const taskLabelEl = document.createElement('div')
    const taskStatusEl = document.createElement('input')

    taskLabelEl.append(task.title)

    taskStatusEl.type = 'checkbox'
    taskStatusEl.checked = task.isDone

    taskEl.append(taskLabelEl, taskStatusEl)
    taskListEl.append(taskEl)
})

rootEl.append(titleEl, taskListEl)
