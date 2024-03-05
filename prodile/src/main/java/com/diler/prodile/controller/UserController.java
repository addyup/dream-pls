package com.diler.prodile.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.diler.prodile.model.User;
import com.diler.prodile.repository.UserRepository;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class UserController {
    
    @Autowired
    UserRepository userRepository;

    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers(@RequestParam(required = false) String email) {
        List<User> users = new ArrayList<User>();
        try {
        
            if(email == null) 
                userRepository.findAll().forEach(users::add);
            else
            userRepository.findByEmail(email).forEach(users::add);

            if (users.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(users, HttpStatus.OK);
        }
        catch(Exception e) {
            return new ResponseEntity<>(users, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<User> getUserById(@PathVariable("id") Long id){
        Optional<User> userData = userRepository.findById(id);

        if(userData.isPresent()) 
        return new ResponseEntity<>(userData.get(), HttpStatus.OK);

        else
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);

    }

    @PostMapping("/createUser")
    public ResponseEntity<User> createUser(@RequestBody User user) {

        try {

        User savedUser = userRepository
        .save(new User(user.getEmail(), user.getFirstName(), user.getLastName()));

        return new ResponseEntity<>(savedUser, HttpStatus.OK);

        }

        catch(Exception e ) {

            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);

        }


    }

    @PutMapping("updateUserWithId/{id}")
    public ResponseEntity<User> updateUser(@PathVariable("id") Long id, @RequestBody User user) {

        Optional<User> userData = userRepository.findById(id);

        if(userData.isPresent()){

            User getUser  = userData.get();

            getUser.setEmail(user.getEmail());
            getUser.setFirstName(user.getFirstName());
            getUser.setLastName(user.getLastName());

            return new ResponseEntity<>(userRepository.save(getUser), HttpStatus.OK);

        }
        
        else {

            return new ResponseEntity<>(HttpStatus.NOT_FOUND);

        }
    }
    
    @DeleteMapping("/deleteUserById/{id}")
    public ResponseEntity<HttpStatus> deleteUser_ById(@PathVariable("id") long id){

        try{

            userRepository.deleteById(id);

            return new ResponseEntity<>(HttpStatus.NO_CONTENT);

        } catch(Exception e) {

            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);

        }
    }
    
}
