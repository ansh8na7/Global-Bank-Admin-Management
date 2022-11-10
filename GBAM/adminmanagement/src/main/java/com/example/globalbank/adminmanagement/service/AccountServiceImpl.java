package com.example.globalbank.adminmanagement.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.globalbank.adminmanagement.entity.Account;
import com.example.globalbank.adminmanagement.repository.AccountRepository;

@Service
public class AccountServiceImpl implements AccountService {

    @Autowired
    AccountRepository accountRepository;

    @Override
    public Boolean addAccount(Account account) {

        accountRepository.save(account);
        return true;
    }

    @Override
    public Account deleteAccount(String accountNo) {

        Account account = accountRepository.findById(accountNo).get(); 
        accountRepository.deleteById(accountNo);
        return account;
    }

    @Override
    public List<Account> getAllAccounts() {
        return accountRepository.findAll();
    }
    
}
