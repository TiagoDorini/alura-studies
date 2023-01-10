import React from "react"
import style from "./Button.module.scss"

interface IAluraButtonProps {
  children: React.ReactNode
  type?: "button" | "submit" | "reset" | undefined
  onClick?: () => void
  className?: string
}

function AluraButton({
  children,
  className,
  onClick,
  type,
}: IAluraButtonProps) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${style.botao} ${className}`}
    >
      {children}
    </button>
  )
}

export default AluraButton
