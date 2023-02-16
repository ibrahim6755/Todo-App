import { createSlice } from '@reduxjs/toolkit'

const initialState = { todos: [] }

export const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        addTodo: (state, action) => {

            state.todos.push(action.payload)
        },
        deleteTodo: (state, action) => {
        state = state.todos.filter((todo)=>todo.id != action.payload)
        return{todos: state}
        },
    }
})

export const { addTodo, deleteTodo } = todoSlice.actions

export default todoSlice.reducer