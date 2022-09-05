import React from 'react'

function TodoItem({todo, onComplete}) {

    const getStyle = () =>{
        return {
            textDecoration: todo.completed ? 'line-through' : 'none',
            margin: '20px',
            border: '1px solid #ffffff',
            backgroundColor: '#ccf7e3'
        }
    }

    return (
        <div style={getStyle()}>
                <input type='checkbox' checked = {todo.completed}
                onChange={()=> onComplete(todo.id)}/>
                {todo.task}
                <button className='add-btn'>x</button>
            
        </div>
    )
}

export default TodoItem;