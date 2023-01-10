import { IAluraItem } from "../../../types/TasksTypes"
import style from "./Item.module.scss"

interface IAluraItemProps extends IAluraItem {
  selectTask: (selectedTask: IAluraItem) => void
}

function AluraItem({
  name,
  duration,
  selected,
  completed,
  id,
  selectTask,
}: IAluraItemProps) {
  return (
    <li
      className={`${style.item} ${selected ? style.itemSelecionado : ""} ${
        completed && style.itemCompletado
      }`}
      onClick={() =>
        !completed && selectTask({ name, duration, selected, completed, id })
      }
    >
      <h3 key={id}>{name}</h3>
      <span>{duration}</span>
      {completed && (
        <span className={style.concluido} aria-label="task finished"></span>
      )}
    </li>
  )
}

export default AluraItem
