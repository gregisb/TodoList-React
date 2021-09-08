import React, { useState, useEffect, useRef } from 'react'

export default function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    })

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('')
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                <input type="text" 
                value={input} 
                name="text" 
                className="todo-input edit"
                onChange={handleChange}
                ref={inputRef}
                maxLength='42'
         />
         <button className="todo-button edit">Atualizar</button>
                </>
            ) : (
                <>
                <input type="text" 
                   placeholder="Adcionar tarefa" 
                   value={input} 
                   name="text" 
                   className="todo-input"
                   onChange={handleChange}
                   ref={inputRef}
                   maxLength='42'

            />
            <button className="todo-button">Adcionar Tarefa</button>
            </>
            )}
            
        </form>
    )
}
