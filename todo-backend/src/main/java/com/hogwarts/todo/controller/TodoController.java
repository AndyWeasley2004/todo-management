package com.hogwarts.todo.controller;


import com.hogwarts.todo.dto.TodoDto;
import com.hogwarts.todo.entity.Todo;
import com.hogwarts.todo.service.TodoService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/todos")
@AllArgsConstructor
public class TodoController {

    private TodoService todoService;

    @PostMapping
    public ResponseEntity<TodoDto> addTodo(@RequestBody TodoDto todoDto){

        TodoDto savedTodo = todoService.addTodo(todoDto);

        return new ResponseEntity<>(savedTodo, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TodoDto> getTodo(@PathVariable("id") Long todoId){
        TodoDto todoDto = todoService.getTodoById(todoId);

        return ResponseEntity.ok(todoDto);
    }

    @GetMapping
    public ResponseEntity<List<TodoDto>> getAllTodos(){
        List<TodoDto> todos = todoService.getAllTodos();

        return ResponseEntity.ok(todos);
    }

    @PutMapping("/{id}")
    public ResponseEntity<TodoDto> updateTodo(@PathVariable Long id,
                                              @RequestBody TodoDto todoDto){

        TodoDto updatedTodo = todoService.updateTodo(id, todoDto);

        return ResponseEntity.ok(updatedTodo);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteTodo(@PathVariable Long id){
        todoService.removeTodo(id);

        return ResponseEntity.ok("Todo Delete Successfully!");
    }

    // patchMapping updates part of the existing object
    @PatchMapping("/{id}/complete")
    public ResponseEntity<TodoDto> completeTodo(@PathVariable Long id){
        TodoDto updatedTodo = todoService.completeTodo(id);

        return ResponseEntity.ok(updatedTodo);
    }

    @PatchMapping("/{id}/incomplete")
    public ResponseEntity<TodoDto> inCompleteTodo(@PathVariable Long id){
        TodoDto updatedTodo = todoService.inCompleteTodo(id);

        return ResponseEntity.ok(updatedTodo);
    }

}
