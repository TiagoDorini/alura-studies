import { useEffect, useState } from "react"
import { durationToSeconds } from "../../common/utils/time"
import { IAluraItem } from "../../types/TasksTypes"
import AluraButton from "../AluraButton"
import AluraWatch from "./AluraWatch"
import style from "./Timer.module.scss"

interface IAluraTimerProps {
  selected: IAluraItem | undefined
}

export function AluraTimer({ selected }: IAluraTimerProps) {
  const [duration, setDuration] = useState<number>()

  useEffect(() => {
    if (selected && selected.duration) {
      setDuration(durationToSeconds(selected?.duration))
    }
  }, [selected])

  function countDown(time: number = 0) {
    setTimeout(() => {
      if (time > 0) {
        setDuration(time - 1)
        return countDown(time - 1)
      }
    }, 1000)
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Choose a card to start the timer!</p>
      <div className={style.relogioWrapper}>
        <AluraWatch duration={duration} />
      </div>
      <div>
        <AluraButton onClick={() => countDown(duration)}>Start</AluraButton>
        <AluraButton className={style.buttonCancelar} onClick={() => {}}>
          Stop
        </AluraButton>
      </div>
    </div>
  )
}

export default AluraTimer
