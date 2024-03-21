import { useState } from "react"

export function AddTodo() {
  const [newTodo, setNewTodo] = useState('')

  return (
    <form action="">
      <input type="text" placeholder="to-do" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />

      <button type="submit">Adicionar</button>
    </form>
  )
}