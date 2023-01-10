import React from "react"
import AluraForm from "../components/AluraForm"
import AluraList from "../components/AluraList"
import style from "./App.module.scss"

function App() {
  return (
    <div className={style.AppStyle}>
      <AluraForm />
      <AluraList />
    </div>
  )
}

export default App
