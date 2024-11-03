package com.example.studentApp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;

import com.example.studentApp.model.Users;
import com.example.studentApp.security.JwtTokenUtil;

@RestController
@RequestMapping("/api")
public class LoginController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private JwtTokenUtil jwtTokenUtil; // Inject JwtTokenUtil here

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Users loginUser) {
        if (loginUser.getUsername() == null || loginUser.getPassword() == null) {
            return ResponseEntity.badRequest().body("Username and password must be provided.");
        }

        try {
            Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginUser.getUsername(), loginUser.getPassword())
            );

            // Load user details after successful authentication
            UserDetails userDetails = userDetailsService.loadUserByUsername(loginUser.getUsername());

            // Generate JWT token using JwtTokenUtil
            String jwtToken = jwtTokenUtil.generateToken(userDetails);

            // Return the token (or additional user details as needed)
            return ResponseEntity.ok("Login successful. Token: " + jwtToken);

        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Invalid username or password");
        }
    }
}
