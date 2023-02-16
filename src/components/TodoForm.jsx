import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/counter/todo/todoSlice'

function TodoForm() {

    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const handleTitle = (e) => {
        setTitle(e.target.value)

    }
    const handleBody = (e) => {
        setBody(e.target.value)

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const newTodo = {
            id: Date.now(),
            title: title,
            body: body,
            status: false
        }
        dispatch(addTodo(newTodo))
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="row mb-3 mt-5 p-2">
                <div className="col-sm-10">
                    <input type="text" onChange={handleTitle} className="form-control" placeholder='Enter the title' />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-sm-10">
                    <input type="text" onChange={handleBody} className="form-control" placeholder='Enter the body' />
                </div>
            </div>
            <button type="submit" className="btn btn-primary"> Save Todo</button>
        </form>
    )
}

export default TodoForm