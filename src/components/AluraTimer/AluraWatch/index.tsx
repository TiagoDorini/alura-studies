import { secondsToAluraTimerFormat } from "../../../common/utils/time"
import style from "./Watch.module.scss"

interface IAluraWatchProps {
  duration?: number
}

export function AluraWatch({ duration = 0 }: IAluraWatchProps) {
  const [minutes, seconds] = secondsToAluraTimerFormat(duration)

  return (
    <>
      <span className={style.relogioNumero}>{minutes[0]}</span>
      <span className={style.relogioNumero}>{minutes[1]}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{seconds[0]}</span>
      <span className={style.relogioNumero}>{seconds[1]}</span>
    </>
  )
}

export default AluraWatch
