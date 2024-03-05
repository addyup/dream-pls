package com.diler.prodile.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.diler.prodile.model.User;

public interface UserRepository extends JpaRepository<User, Long>{

    List<User> findByLastName(String lastName);
    List<User> findByEmail(String email);
    
} 