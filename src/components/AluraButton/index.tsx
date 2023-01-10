import React from "react"
import style from "./Button.module.scss"

interface IAluraButtonProps {
  children: React.ReactNode
  type?: "button" | "submit" | "reset" | undefined
}

class AluraButton extends React.Component<IAluraButtonProps> {
  render() {
    return (
      <button type={this.props.type} className={style.botao}>
        {this.props.children}
      </button>
    )
  }
}

export default AluraButton
