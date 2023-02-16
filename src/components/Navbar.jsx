import React from 'react'
import { useSelector } from 'react-redux'

function Navbar() {
    const {todos}= useSelector(state=>state.todo)
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary mt-3 mb-3">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">{todos.length} </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar