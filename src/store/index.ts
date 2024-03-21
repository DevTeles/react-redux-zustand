import { configureStore, createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'todo',
  initialState: ['Fazer café', 'Estudar Redux', 'Zustand'],

  reducers: {},
})

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer
  }
})