package com.codingboot.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.codingboot.entity.User;
import com.codingboot.repository.UserRepository;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
    
    @Autowired
    private UserRepository userRepository;

    @PostMapping
    public ResponseEntity<User> createNewUser(@RequestParam String name, @RequestPart("file") MultipartFile file) throws IOException {
       User user = User.builder().userName(name).displayPicture(file.getBytes()).build();
       userRepository.save(user);
       user.setDisplayPicture(null);
       return ResponseEntity.ok(user);
    }

    @GetMapping
    public ResponseEntity<List<User>> getAllUser() {
        List<User> userList = userRepository.findAll();
        return ResponseEntity.ok(userList);
    }
}
