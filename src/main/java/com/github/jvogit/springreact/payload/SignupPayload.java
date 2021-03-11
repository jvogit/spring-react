package com.github.jvogit.springreact.payload;

import lombok.Data;

@Data
public class SignupPayload {
    private String username;
    private String email;
    private String password;
}
