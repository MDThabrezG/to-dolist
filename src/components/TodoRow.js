import React ,{ useRef, useState } from 'react';
import "../App.css";
import { MdDelete, MdEdit } from "react-icons/md";
import { TodoApp } from "./TodoApp";

const TodoRow = (props) => {

    const [isCompleted, setIsComplete] = useState(false);
    const [isEdit,setIsEdit] = useState(false);
    const updateRef = useRef(null);
    const completeTodo = () =>{
        setIsComplete(!isCompleted);

    }

    const handleEdit = (event) => {
        event.stopPropagation();
        setIsEdit(true);
    }

    const handleUpdate = (event) =>{
        console.log(updateRef.current.value);
        if(updateRef.current.value) {
            props.editTodo(props.index, updateRef.current.value);
            setIsEdit(false);
        }
    }
    
    const handleDelete =(event) => {
        event.stopPropagation();
        props.deleteTodo(props.index);
    }
    
    return(
        <>
            {isEdit ?
                <form className="todo-form edit" >
                    <input type="text" defaultValue={props.todo} ref={updateRef} className="todo-input edit" />
                    <button type="button" className="todo-button edit" onClick={handleUpdate}>Update</button>
                </form>      
           : <div className={isCompleted ?"todo-row complete":"todo-row"} onClick={completeTodo}>
                <div>
                    {props.todo}
                </div>
                <div className="todo-icons">
                    <MdEdit className="edit-icon" onClick={handleEdit}/>
                    &nbsp;
                    <MdDelete className="delete-icon" onClick={handleDelete} />
                </div>
            </div>
            }
        </>
    );
}

export {TodoRow} ;
