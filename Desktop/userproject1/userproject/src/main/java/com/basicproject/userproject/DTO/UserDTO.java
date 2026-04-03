package com.basicproject.userproject.DTO;

public class UserDTO {

    private Long id;
    private String username;
    private String Name;
    private long password;

    public void setId(Long id) {
        this.id = id;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setName(String name) {
        Name = name;
    }

    public void setPassword(long password) {
        this.password = password;
    }

    public Long getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public String getName() {
        return Name;
    }

    public long getPassword() {
        return password;
    }
}


