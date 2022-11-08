package com.example.globalbank.adminmanagement.service;

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

        String accountNumber = account.getAccountNumber();

        if (accountRepository.findById(accountNumber).isPresent()) {
            return false;
        }

        accountRepository.save(account);
        return true;
    }
    
}
