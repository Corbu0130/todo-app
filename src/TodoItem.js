import React from "react"

function TodoItem(props) {
    let mstyle = {color: "#0000ff",
        textDecoration: "line-through"}
    return(
        <div className="todo">
            <input type="checkbox" checked={props.item.completed} 
                onChange={() => props.handleChange(props.item.id)} />
            <label style={props.item.completed ? mstyle : null}>
                {props.item.text}
            </label>
        </div>
    )
}
//review line 7

export default TodoItem