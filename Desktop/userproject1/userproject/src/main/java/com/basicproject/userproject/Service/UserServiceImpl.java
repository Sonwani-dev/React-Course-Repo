package com.basicproject.userproject.Service;

import com.basicproject.userproject.DTO.UserDTO;
import com.basicproject.userproject.Repository.UserRepository;
import com.basicproject.userproject.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDTO getUserById(Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));
        UserDTO dto = new UserDTO();
        dto.setId(user.getId());
        dto.setName(user.getName());
        dto.setUsername(user.getUsername());
        dto.setPassword(user.getPassword());

        return dto;
    }

    @Override
    public UserDTO createUser(String name, Long id, String username, String password) {
        return null;
    }



    @Override
    public UserDTO createUser(UserDTO dto) {

        User user = new User();
        user.setUsername(dto.getUsername());
        user.setPassword(dto.getPassword());
        user.setName(dto.getName());
        user.setId(dto.getId());

        User savedUser = userRepository.save(user);

        UserDTO response = new UserDTO();
        user.setUsername(dto.getUsername());
        user.setPassword(dto.getPassword());
        user.setName(dto.getName());
        user.setId(dto.getId());

        return response;
    }
}