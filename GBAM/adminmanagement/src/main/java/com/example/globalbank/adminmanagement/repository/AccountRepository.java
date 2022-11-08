package com.example.globalbank.adminmanagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.globalbank.adminmanagement.entity.Account;

@Repository
public interface AccountRepository extends JpaRepository<Account, String> {
    
}
