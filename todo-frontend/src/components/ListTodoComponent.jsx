import React, {useEffect, useState} from "react";
import {completeTodo, deleteTodo, getAllTodos, inCompleteTodo} from "../services/TodoService.js";
import {useNavigate} from "react-router-dom";
import {isAdminUser} from "../services/AuthService.js";

const ListTodoComponent = () => {

    const [todos, setTodos] = useState([]);

    const  navigate = useNavigate();

    const isAdmin = isAdminUser(); // true or false

    useEffect(() => {
        listTodos();
    }, [])

    function listTodos(){
        getAllTodos().then((response) => {
            setTodos(response.data);
        }).catch(error => {
            console.error(error);
        });
    }

    function addTodo(){
        navigate("/add-todo");
    }

    function updateTodo(id){
        navigate((`/update-todo/${id}`));
    }

    function removeTodo(id){
        deleteTodo(id).then(() => {
            listTodos();
        }).catch(error => {
            console.error(error);
        });
    }

    function markComplete(id){
        completeTodo(id).then(() => {
            listTodos();
        }).catch(error => {
            console.error(error);
        });
    }

    function markInComplete(id){
        inCompleteTodo(id).then(() => {
            listTodos();
        }).catch(error => {
            console.error(error);
        });
    }


    return (
        <div className='container' style={{marginTop: "20px"}}>
            <h2 className='text-center'>List of Todos</h2>
            {
                isAdmin &&
                <button className='btn btn-primary mb-2' onClick={addTodo}>Add Todo</button>
            }

            <div>
                <table className='table table-striped table-bordered' >
                    <thead>
                        <tr>
                            <th>Todo Title</th>
                            <th>Todo Description</th>
                            <th>Todo Completed</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        todos.map(todo =>
                            <tr key={todo.id}>
                                <td>{todo.title}</td>
                                <td>{todo.description}</td>
                                <td>{todo.completed ? 'YES' : 'NO'}</td>
                                <td>
                                    {
                                        isAdmin &&
                                        <button className='btn btn-info' onClick={() => updateTodo(todo.id)}>Update</button>
                                    }
                                    {
                                        isAdmin &&
                                        <button className='btn btn-danger' onClick={() => removeTodo(todo.id)}
                                                           style={{marginLeft: "10px"}}>Delete</button>
                                    }
                                    <button className='btn btn-success' onClick={() => markComplete(todo.id)}
                                            style={{marginLeft: "10px"}}>Complete</button>
                                    <button className='btn btn-warning' onClick={() => markInComplete(todo.id)}
                                            style={{marginLeft: "10px"}}>In Complete</button>
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default ListTodoComponent