import React, {useState} from 'react'

export default function AddTodo(props) {

    const [input, setinput] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        props.addtodo(input)
        setinput('')
    }

    return (
        <div>
            <input onChange={(e) => setinput(e.target.value)}></input>
            <button onClick={(e) => handleSubmit(e)}>Submit</button>
        </div>
    )
}
