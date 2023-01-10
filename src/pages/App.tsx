import { useState } from "react"
import AluraForm from "../components/AluraForm"
import AluraList from "../components/AluraList"
import { IAluraItem } from "../types/TasksTypes"
import AluraTimer from "../components/AluraTimer"
import style from "./App.module.scss"

function App() {
  const [tasks, setTasks] = useState<IAluraItem[]>([])

  return (
    <div className={style.AppStyle}>
      <AluraForm setTasks={setTasks} />
      <AluraList tasks={tasks} />
      <AluraTimer />
    </div>
  )
}

export default App
