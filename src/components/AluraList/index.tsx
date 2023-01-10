import React from "react"
import AluraItem from "./AluraItem"
import style from "./List.module.scss"

function AluraList() {
  const tasks = [
    {
      name: "React",
      duration: "02:00:00",
    },
    {
      name: "JavaScript",
      duration: "01:00:00",
    },
    {
      name: "TypeScript",
      duration: "03:00:00",
    },
  ]
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do Dia</h2>
      <ul>
        {tasks.map((task, index) => (
          <AluraItem key={`${index}-${task.name}`} {...task} />
        ))}
      </ul>
    </aside>
  )
}

export default AluraList
