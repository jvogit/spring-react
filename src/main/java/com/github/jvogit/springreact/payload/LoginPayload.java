package com.github.jvogit.springreact.payload;

import lombok.Data;

@Data
public class LoginPayload {
    private String username;
    private String password;
}
