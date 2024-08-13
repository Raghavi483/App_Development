package com.example.demo.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.demo.model.Reach;
import com.example.demo.service.ReachService;

import java.util.List;

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


@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000") 
public class ReachController {
    @Autowired
    ReachService rs;
    @PostMapping("/reach")
    public ResponseEntity<Reach> adddata(@RequestBody Reach r)
    {
        Reach obj=rs.create(r);
        return new ResponseEntity<>(obj,HttpStatus.CREATED);
    }
    @GetMapping("/getit") 
    public List<Reach> fetchDepartmentList() 
    { 
        return rs.fetchDepartmentList(); 
    }
    @GetMapping("/reach/{userId}")
    public ResponseEntity<Reach> getById(@PathVariable("userId")int userId)
    {
        try
        {
            return new ResponseEntity<>(rs.getByid(userId),HttpStatus.OK);
        }
        catch(Exception e)
        {
            return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
        }
    }
    @GetMapping("/sort/{field}")
    public ResponseEntity<List<Reach>> get(@PathVariable String field)
    {
        try{
            return new ResponseEntity<>(rs.getbysort(field),HttpStatus.OK);
        }
        catch(Exception e)
        {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @PutMapping("/reach/{userId}")
    public ResponseEntity<Reach> putMethod(@PathVariable("userId") int userId,@RequestBody Reach pd)
    {
        if(rs.updateDetails(userId,pd) == true)
        {
            return new ResponseEntity<>(pd,HttpStatus.OK);
        }
        return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
    }
    @DeleteMapping("/delete/reach/{userId}")
    public ResponseEntity<Boolean> delete(@PathVariable("userId") int userId)
    {
        if(rs.deleteEmployee(userId) == true)
        {
            return new ResponseEntity<>(true,HttpStatus.OK);
        }
        return new ResponseEntity<>(false,HttpStatus.NOT_FOUND);
    }
}
