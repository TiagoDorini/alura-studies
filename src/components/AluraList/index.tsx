import React from "react"

function AluraList() {
  const tasks = [
    {
      name: "React",
      duration: "02:00:00",
    },
    {
      name: "JavaScript",
      duration: "01:00:00",
    },
    {
      name: "TypeScript",
      duration: "03:00:00",
    },
  ]
  return (
    <aside>
      <h2>Estudos do Dia</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={`${index}-${task.name}`}>
            <h3>{task.name}</h3>
            <span>{task.duration}</span>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default AluraList
