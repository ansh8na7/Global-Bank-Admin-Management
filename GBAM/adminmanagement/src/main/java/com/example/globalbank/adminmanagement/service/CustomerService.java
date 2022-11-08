package com.example.globalbank.adminmanagement.service;

import java.util.List;

import com.example.globalbank.adminmanagement.entity.Account;
import com.example.globalbank.adminmanagement.entity.Customer;

public interface CustomerService {

    List<Customer> getAllCustomers();

    Boolean addAccount(Account account);
    
}
