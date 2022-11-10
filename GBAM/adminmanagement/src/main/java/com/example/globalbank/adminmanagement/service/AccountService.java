package com.example.globalbank.adminmanagement.service;

import java.util.List;

import com.example.globalbank.adminmanagement.entity.Account;

public interface AccountService {

    Boolean addAccount(Account account);

    Account deleteAccount(String accountNo);

    List<Account> getAllAccounts();
    
}
