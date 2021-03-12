package com.github.jvogit.springreact.service;

import java.util.Collections;
import java.util.Optional;
import javax.transaction.Transactional;
import javax.validation.constraints.Email;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.github.jvogit.springreact.entity.account.User;
import com.github.jvogit.springreact.entity.role.RoleName;
import com.github.jvogit.springreact.exception.BadRequestException;
import com.github.jvogit.springreact.jwt.JwtTokenProvider;
import com.github.jvogit.springreact.jwt.JwtUserPrincipal;
import com.github.jvogit.springreact.payload.LoginPayload;
import com.github.jvogit.springreact.payload.SignupPayload;
import com.github.jvogit.springreact.repository.RoleRepository;
import com.github.jvogit.springreact.repository.UserRepository;
import com.github.jvogit.springreact.response.account.LoginResponse;

@Service
@Transactional
public class UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private AuthenticationManager authManager;
    @Autowired
    private PasswordEncoder pwdEncoder;
    @Autowired
    private JwtTokenProvider jwtTokenProvider;
    
    public Optional<User> findUserById(Long id) {
        return userRepository.findById(id);
    }

    public User createUser(SignupPayload payload) {
        User user = new User(payload.getUsername(), payload.getEmail(),
                pwdEncoder.encode(payload.getPassword()));
        user.setRoles(Collections.singleton(
                roleRepository.findByName(RoleName.ROLE_USER).get()));

        if (exists(user))
            throw new BadRequestException("User already exists!");

        return userRepository.save(user);
    }

    public LoginResponse authenticate(LoginPayload request) {
        Authentication auth = authManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getUsername(),
                        request.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(auth);
        User user = ((JwtUserPrincipal) auth.getPrincipal()).getUser();
        return new LoginResponse(user,
                jwtTokenProvider.generateToken(auth));
    }

    public boolean exists(User user) {
        return existsByUsername(user.getUsername())
                || existsByEmail(user.getEmail());
    }

    public boolean existsByUsername(String name) {
        return userRepository.existsByUsername(name);
    }

    public boolean existsByEmail(@Email String email) {
        return userRepository.existsByEmail(email);
    }

}
