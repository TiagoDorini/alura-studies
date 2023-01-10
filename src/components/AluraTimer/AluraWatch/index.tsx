import style from "./Watch.module.scss"

interface IAluraWatchProps {
  duration?: string
}

export function AluraWatch({ duration = "0" }: IAluraWatchProps) {
  console.log(duration)
  const [minutes, seconds] = duration.split(":")
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
