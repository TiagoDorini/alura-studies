import React, { useState } from "react"
import AluraButton from "../AluraButton"
import { IAluraItem } from "../../types/TasksTypes"
import style from "./Form.module.scss"
import { v4 as uuidV4 } from "uuid"

interface IAluraFormProps {
  setTasks: React.Dispatch<React.SetStateAction<IAluraItem[]>>
}

function AluraForm({ setTasks }: IAluraFormProps) {
  const [task, setTask] = useState("")
  const [duration, setDuration] = useState("00:00")

  function addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setTasks((oldTasks) => [
      ...oldTasks,
      { name: task, duration, selected: false, completed: false, id: uuidV4() },
    ])
    setTask("")
    setDuration("00:00")
  }

  return (
    <form className={style.novaTarefa} onSubmit={addTask}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          placeholder="o que vc quer estudar?"
          value={task}
          onChange={(event) => setTask(event.target.value)}
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo">Tempo</label>
        <input
          type="time"
          step="1"
          name="tempo"
          id="tempo"
          min="00:00:00"
          max="01:30:00"
          value={duration}
          onChange={(event) => setDuration(event.target.value)}
          required
        />
      </div>
      <AluraButton type={"submit"}> Adicionar </AluraButton>
    </form>
  )
}

export default AluraForm
