import React from "react"
import style from "./Button.module.scss"

interface IAluraButtonProps {
  children: React.ReactNode
  type?: "button" | "submit" | "reset" | undefined
  onClick?: () => void
  className?: string
}

class AluraButton extends React.Component<IAluraButtonProps> {
  render() {
    return (
      <button
        onClick={this.props.onClick}
        type={this.props.type}
        className={`${style.botao} ${this.props.className}`}
      >
        {this.props.children}
      </button>
    )
  }
}

export default AluraButton
