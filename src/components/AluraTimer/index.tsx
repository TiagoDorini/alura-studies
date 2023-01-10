import AluraButton from "../AluraButton"
import AluraWatch from "./AluraWatch"
import style from "./Timer.module.scss"

export function AluraTimer() {
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
