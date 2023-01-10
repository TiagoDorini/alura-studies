import style from "../List.module.scss"

interface IAluraItemProps {
  name: string
  duration: string
}

function AluraItem({ name, duration }: IAluraItemProps) {
  return (
    <li className={style.item}>
      <h3>{name}</h3>
      <span>{duration}</span>
    </li>
  )
}

export default AluraItem
