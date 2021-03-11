package com.github.jvogit.springreact.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.github.jvogit.springreact.entity.role.Role;
import com.github.jvogit.springreact.entity.role.RoleName;

@Repository
public interface RoleRepository extends CrudRepository<Role, Long> {
    public Optional<Role> findByName(RoleName roleName);
}
