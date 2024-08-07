package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Reach;

@Repository
public interface ReachRepo extends JpaRepository<Reach,Integer>{
    
}
