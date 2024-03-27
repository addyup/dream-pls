package com.codingboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.codingboot.entity.User;

public interface UserRepository extends JpaRepository<User, Long>{
    
}
