package com.example.globalbank.adminmanagement.service;

import java.util.List;

import com.example.globalbank.adminmanagement.entity.Account;

public interface CustomerService {

    List<Account> getAllCustomers();

    Boolean addAccount(Account account);

    Account deleteAccount(String accountNo);
    
}
