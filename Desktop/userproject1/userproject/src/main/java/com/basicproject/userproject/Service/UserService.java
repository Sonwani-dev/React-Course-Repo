package com.basicproject.userproject.Service;

import com.basicproject.userproject.DTO.UserDTO;

public interface UserService {

    UserDTO getUserById(Long id);
    UserDTO createUser(String name, Long id, String username, String password);


    UserDTO createUser(UserDTO dto);
}
