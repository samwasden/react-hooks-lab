import React from 'react'
import Todo from './Todo'

export default function List(props) {

    const {todo} = props

    return (
        <div>
            {todo.map((item, index) => {
                return <Todo item={item} key={index}/>
            })}
        </div>
    )
}
