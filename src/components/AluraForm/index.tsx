import React from "react"
import AluraButton from "../AluraButton"
import { IAluraItem } from "../../types/TasksTypes"
import style from "./Form.module.scss"
import { v4 as uuidV4 } from "uuid"

interface IAluraFormProps {
  setTasks: React.Dispatch<React.SetStateAction<IAluraItem[]>>
}

class AluraForm extends React.Component<IAluraFormProps> {
  state: IAluraItem = {
    duration: "00:00",
    name: "",
    completed: false,
    selected: false,
    id: "",
  }

  addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    this.props.setTasks((oldTasks) => [
      ...oldTasks,
      { ...this.state, selected: false, completed: false, id: uuidV4() },
    ])
    this.setState({
      name: "",
      duration: "00:00",
    })
  }

  render() {
    return (
      <form className={style.novaTarefa} onSubmit={this.addTask.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Adicione um novo estudo</label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            placeholder="o que vc quer estudar?"
            value={this.state.name}
            onChange={(event) =>
              this.setState({ ...this.state, name: event.target.value })
            }
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
            value={this.state.duration}
            onChange={(event) =>
              this.setState({ ...this.state, duration: event.target.value })
            }
            required
          />
        </div>
        <AluraButton type={"submit"}> Adicionar </AluraButton>
      </form>
    )
  }
}

export default AluraForm
