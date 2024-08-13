package com.example.demo.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.Register;
import com.example.demo.service.RegisterService;

@RestController
@RequestMapping("/reg")
@CrossOrigin(origins = "http://localhost:3000") 
public class RegisterController {

    @Autowired
    RegisterService rs;

    // Create a new user
    @PostMapping("/register")
    public ResponseEntity<Register> addUser(@RequestBody Register r) {
        Register obj = rs.create(r);
        return new ResponseEntity<>(obj, HttpStatus.CREATED);
    }

    // Fetch all registered users
    @GetMapping("/users") 
    public ResponseEntity<List<Register>> fetchAllUsers() {
        List<Register> users = rs.fetchDepartmentList();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    // Fetch a single user by ID
    @GetMapping("/user/{userId}")
    public ResponseEntity<Register> getUserById(@PathVariable("userId") int userId) {
        try {
            return new ResponseEntity<>(rs.getByid(userId), HttpStatus.OK);
        } catch(Exception e) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    // Fetch users sorted by a specific field
    @GetMapping("/users/sort/{field}")
    public ResponseEntity<List<Register>> getUsersSorted(@PathVariable String field) {
        try {
            return new ResponseEntity<>(rs.getbysort(field), HttpStatus.OK);
        } catch(Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Update user details by ID
    @PutMapping("/user/{userId}")
    public ResponseEntity<Register> updateUser(@PathVariable("userId") int userId, @RequestBody Register pd) {
        if(rs.updateDetails(userId, pd)) {
            return new ResponseEntity<>(pd, HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }

    // Delete a user by ID
    @DeleteMapping("/user/{userId}")
    public ResponseEntity<Boolean> deleteUser(@PathVariable("userId") int userId) {
        if(rs.deleteEmployee(userId)) {
            return new ResponseEntity<>(true, HttpStatus.OK);
        }
        return new ResponseEntity<>(false, HttpStatus.NOT_FOUND);
    }
}
