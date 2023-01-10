import React from "react"
import AluraButton from "../AluraButton"
import style from "./Form.module.scss"

class AluraForm extends React.Component {
  render() {
    return (
      <form className={style.novaTarefa} action="">
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Adicione um novo estudo</label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            placeholder="o que vc quer estudar?"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tempo">Tempo</label>
          <input
            type="time"
            step="1"
            name="tempo"
            id="tempo"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <AluraButton></AluraButton>
      </form>
    )
  }
}

export default AluraForm
