package com.hogwarts.todo.service;

import com.hogwarts.todo.dto.TodoDto;

import java.util.List;

public interface TodoService {

    TodoDto addTodo(TodoDto todoDto);

    TodoDto getTodoById(Long todoId);

    List<TodoDto> getAllTodos();

    TodoDto updateTodo(Long id, TodoDto updatedTodo);

    void removeTodo(Long id);

    TodoDto completeTodo(Long id);

    TodoDto inCompleteTodo(Long id);
}
