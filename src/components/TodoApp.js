import React ,{ Component } from 'react';
import "../App.css";
import { TodoRow } from "./TodoRow";

class TodoApp extends Component{
    
    constructor(props) {
        super(props);
            this.inputRef = React.createRef();
            this.state ={
                todoList: []
                
            }
    }

    addTodo =() =>{
        if(this.inputRef.current.value){
            let list = this.state.todoList;
            list.push(this.inputRef.current.value);
            this.setState({
                todoList: list
            });
        }
    }

    editTodo =(index, value) => {
        if (value) {
            let list = this.state.todoList;
            list[index] = value;
            this.setState({
                todoList: list
            });
        }
    }

    deleteTodo = (index) => {
        let list =this.state.todoList;
        list.splice(index,1);
        this.setState({
            todoList: list
        });
    }
    render() {
        return(
            <>
            <h1>what to do today ?</h1>
            <form >
                <input type="text" className="todo-input" ref={this.inputRef}></input>   
                <button type ="button"  onClick = {this.addTodo} className="todo-button" >Add Todo</button>
            </form>
            {this.state.todoList.map((todoItem,index) =>{
                return <TodoRow key={index} 
                index={index}
                editTodo={this.editTodo}
                deleteTodo={this.deleteTodo}
                todo={todoItem} />
            })}
            </>
        
        );
    }
}
 export {TodoApp};