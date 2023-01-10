import React from "react"
import AluraForm from "../components/AluraForm"
import AluraList from "../components/AluraList"
import AluraTimer from "../components/AluraTimer"
import style from "./App.module.scss"

function App() {
  return (
    <div className={style.AppStyle}>
      <AluraForm />
      <AluraList />
      <AluraTimer />
    </div>
  )
}

export default App
