package com.hogwarts.todo.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TodoDto {
    // Dto == data transform object, avoid username/password or other sensitive info from internet
    private Long id;
    private String title;
    private String description;
    private boolean completed;

}
