package com.example.globalbank.adminmanagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.globalbank.adminmanagement.entity.UserAdmin;

@Repository
public interface UserAdminRepository extends JpaRepository<UserAdmin, String> {
    
}
