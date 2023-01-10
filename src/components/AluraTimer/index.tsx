import { useState } from "react"
import { hourToMinutes } from "../../common/utils/time"
import { IAluraItem } from "../../types/TasksTypes"
import AluraButton from "../AluraButton"
import AluraWatch from "./AluraWatch"
import style from "./Timer.module.scss"

interface IAluraTimerProps {
  selected: IAluraItem | undefined
}

export function AluraTimer({ selected }: IAluraTimerProps) {
  const [duration, setDuration] = useState<string>()

  if (selected && selected.duration) {
    setDuration(hourToMinutes(selected?.duration))
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Choose a card to start the timer!</p>
      <div className={style.relogioWrapper}>
        <AluraWatch />
      </div>
      <AluraButton>Start</AluraButton>
    </div>
  )
}

export default AluraTimer
