import React from "react"

import TodoItem from "./TodoItem"
import todosData from "./todos"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id){
        //console.log("Changed!", id)   //test
        this.setState(state0 => {
            // const newTodos = state0.todos.map(todo => {     //    
            //     if (todo.id===id) {                         //
            //         todo.completed = !todo.completed        //First code
            //     }                                           //
            // })                                              //
            // return newTodos                                 //
            return state0.todos.map(todo => {
                if (todo.id===id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
        })
    }

    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item}
            handleChange={this.handleChange} />)
        return (
            <div>
                {todoItems}
            </div>
        )
    }
}

export default App