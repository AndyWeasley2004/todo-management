package com.hogwarts.todo.service;

import com.hogwarts.todo.dto.LoginDto;
import com.hogwarts.todo.dto.RegisterDto;

public interface AuthService {
    String register(RegisterDto registerDto);

    String login(LoginDto loginDto);
}
