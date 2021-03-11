package com.github.jvogit.springreact.response.account;

import com.github.jvogit.springreact.response.ApiSuccess;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class LoginResponse extends ApiSuccess {
    private final Object user;
    private final String token;
}
