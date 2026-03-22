package com.example.demo.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")   // base path
@CrossOrigin(origins = "http://localhost:3000") // allow frontend
public class ContactController {

    @PostMapping("/contact")
    public String contact(@RequestBody ContactRequest request) {

        System.out.println("Name: " + request.getName());
        System.out.println("Email: " + request.getEmail());
        System.out.println("Message: " + request.getMessage());

        return "Message received successfully 🚀";
    }
}