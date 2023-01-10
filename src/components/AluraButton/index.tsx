import React from "react"
import style from "./Button.module.scss"

interface IAluraButtonProps {
  children: React.ReactNode
}

class AluraButton extends React.Component<IAluraButtonProps> {
  render() {
    return <button className={style.botao}>{this.props.children}</button>
  }
}

export default AluraButton
