package com.example.hvls.service;

import com.example.hvls.domain.entity.User;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.List;


public interface UserService extends UserDetailsService {
    User saveUser(User user);
    User findUserById(Long id);
    void deleteUserById(Long id);
    List<User> findAllUsers();
}