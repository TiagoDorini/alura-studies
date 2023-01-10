import { IAluraItem } from "../../../types/TasksTypes"
import style from "../List.module.scss"

interface IAluraItemProps extends IAluraItem {}

function AluraItem({
  name,
  duration,
  selected,
  completed,
  id,
}: IAluraItemProps) {
  return (
    <li className={style.item}>
      <h3 key={id}>{name}</h3>
      <span>{duration}</span>
    </li>
  )
}

export default AluraItem
