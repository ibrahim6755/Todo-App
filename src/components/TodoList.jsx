import React from 'react'
import { useSelector ,useDispatch } from 'react-redux'
import { deleteTodo } from '../features/counter/todo/todoSlice'

function TodoList() {

    const {todos} = useSelector(state=> state.todo)
    const dispatch = useDispatch()

    const handleDelete = (id)=>{
        dispatch(deleteTodo(id))

    }


    return (
        <ul className="list-group mt-4">
            <li className="list-group-item active" aria-current="true">All Todos</li>
            {

                todos.length == 0 ? 
                <li className="list-group-item d-flex justify-content-between align-items-center">
                <span>No data found....</span>
                 </li>:
                todos.map((todo) => {
                    return (
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                           <span> {todo.title} </span>
                           <button onClick={()=>handleDelete(todo.id)} className=' bg-danger btn'><i className="bi bi-trash fs-4"></i></button> 
                            </li>
                    )

                })
            }

        </ul>
    )
}

export default TodoList