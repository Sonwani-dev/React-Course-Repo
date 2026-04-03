package com.basicproject.userproject.Controller;


import com.basicproject.userproject.DTO.UserDTO;
import com.basicproject.userproject.Service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping
    public ResponseEntity<UserDTO> createUser(@RequestBody UserDTO dto) {
        UserDTO createdUser = userService.createUser(dto);
        return ResponseEntity.ok(createdUser);
    }


}