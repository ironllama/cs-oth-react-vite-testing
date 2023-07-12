import { useState } from "react"

import './TaskInput.css';

export default function TaskInput(props) {
    const [text, setText] = useState("");

    function handleClick() {
        props.newTask(text);
        setText("");
    }

    function handleKeyUp(evt) {
        if (evt.code === "Enter") handleClick();
    }

    return (
        <div className="taskInput">
            <input type="text" className="taskTextInput" onKeyUp={handleKeyUp} onChange={(evt) => setText(evt.target.value)} value={text} />
            <button className="addButton" onClick={handleClick} disabled={!text}>Add Task</button>
        </div>
    )
}