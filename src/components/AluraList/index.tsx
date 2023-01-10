import AluraItem from "./AluraItem"
import { IAluraItem } from "../../types/TasksTypes"

import style from "./List.module.scss"

interface IAluraListProps {
  tasks: IAluraItem[]
}

function AluraList({ tasks }: IAluraListProps) {
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
