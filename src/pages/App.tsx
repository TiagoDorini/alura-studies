import { useState } from "react"
import AluraForm from "../components/AluraForm"
import AluraList from "../components/AluraList"
import { IAluraItem } from "../types/TasksTypes"
import AluraTimer from "../components/AluraTimer"
import style from "./App.module.scss"

function App() {
  const [tasks, setTasks] = useState<IAluraItem[]>([])
  const [selected, setSelected] = useState<IAluraItem>()

  function selectTask(selectedTask: IAluraItem) {
    setSelected(selectedTask)
    setTasks((prevTasks) =>
      prevTasks.map((task) => ({
        ...task,
        selected: task.id === selectedTask.id ? true : false,
      }))
    )
  }

  return (
    <div className={style.AppStyle}>
      <AluraForm setTasks={setTasks} />
      <AluraList tasks={tasks} selectTask={selectTask} />
      <AluraTimer />
    </div>
  )
}

export default App
