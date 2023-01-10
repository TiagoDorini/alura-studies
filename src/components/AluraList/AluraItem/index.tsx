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
  countingDown,
  selectTask,
}: IAluraItemProps) {
  return (
    <li
      className={`${style.item} ${selected ? style.itemSelecionado : ""}`}
      onClick={() =>
        selectTask({ name, duration, selected, completed, id, countingDown })
      }
    >
      <h3 key={id}>{name}</h3>
      <span>{duration}</span>
    </li>
  )
}

export default AluraItem
