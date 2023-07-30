package com.hogwarts.todo.service;

import com.hogwarts.todo.dto.TodoDto;
import com.hogwarts.todo.entity.Todo;
import com.hogwarts.todo.exception.TodoNotFoundException;
import com.hogwarts.todo.repository.TodoRepository;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class TodoServiceImpl implements TodoService {

    private ModelMapper modelMapper;

    private TodoRepository todoRepository;

    @Override
    public TodoDto addTodo(TodoDto todoDto) {

        // convert TodoDto into Todo jpa entity
        Todo todo = modelMapper.map(todoDto, Todo.class);

        // save object
        Todo savedTodo = todoRepository.save(todo);

        // convert saved object into dotoDto
        TodoDto savedTodoDto = modelMapper.map(savedTodo, TodoDto.class);

        return savedTodoDto;
    }

    @Override
    public TodoDto getTodoById(Long id) {

        Todo todo = todoRepository.findById(id)
                .orElseThrow(() ->
                        new TodoNotFoundException("Todo not found with id: " + id));

        return modelMapper.map(todo, TodoDto.class);
    }

    @Override
    public List<TodoDto> getAllTodos() {

        List<Todo> todos = todoRepository.findAll();

        return todos.stream()
                .map((each) -> modelMapper.map(each, TodoDto.class))
                .collect(Collectors.toList());
    }

    @Override
    public TodoDto updateTodo(Long id, TodoDto updatedTodo) {

        Todo todo = todoRepository.findById(id)
                .orElseThrow(() ->
                        new TodoNotFoundException("Todo does not exist for id: " + id));

        todo.setTitle(updatedTodo.getTitle());
        todo.setDescription(updatedTodo.getDescription());
        todo.setCompleted(updatedTodo.isCompleted());

        Todo savedTodo = todoRepository.save(todo);

        return modelMapper.map(savedTodo, TodoDto.class);
    }

    @Override
    public void removeTodo(Long id) {

        Todo todo = todoRepository.findById(id)
                .orElseThrow(() ->
                        new TodoNotFoundException("Todo does not exist for id: " + id));

        todoRepository.deleteById(id);
    }

    @Override
    public TodoDto completeTodo(Long id) {
        Todo todo = todoRepository.findById(id)
                .orElseThrow(() ->
                        new TodoNotFoundException("Todo does not exist for id: " + id));

        todo.setCompleted(Boolean.TRUE);

        Todo savedTodo = todoRepository.save(todo);

        return modelMapper.map(savedTodo, TodoDto.class);
    }

    @Override
    public TodoDto inCompleteTodo(Long id) {
        Todo todo = todoRepository.findById(id)
                .orElseThrow(() ->
                        new TodoNotFoundException("Todo does not exist for id: " + id));

        todo.setCompleted(Boolean.FALSE);

        Todo savedTodo = todoRepository.save(todo);

        return modelMapper.map(savedTodo, TodoDto.class);
    }
}
