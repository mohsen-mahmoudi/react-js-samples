import React, { Component, useEffect, useState } from "react";
import { useFieldForInputText } from "../10-customHook/CustomHookUtil";

export default function TodosUseState() {

    const [todos, setTodos] = useState([])
    const todo = useFieldForInputText('')

    function handleSubmit(e) {
        e.preventDefault();
        setTodos(todos => [...todos, todo.value])
        todo.onChange({ target: { value: '' } })
    }

    function remove(t) {
        const todosNew = todos.filter(td => td !== t.t);
        setTodos(todosNew)
    }

    return <div>
        <form onSubmit={handleSubmit}>
            <span>Todo : </span>
            <input type="text" id="todo" {...todo} />
            <button type="submit">Add</button>
        </form>
        <ul>
            {todos.map((t, i) => (
                <li key={i}>
                    {t}
                    <span onClick={() => remove({ t })}
                        style={{ color: 'red', marginLeft: '3px' }}>*</span>
                </li>
            ))}
        </ul>
    </div>

}
