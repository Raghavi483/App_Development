package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.model.Login;

public interface LoginRepo extends JpaRepository<Login, Integer> {
    Optional<Login> findByUsername(String username);
}
