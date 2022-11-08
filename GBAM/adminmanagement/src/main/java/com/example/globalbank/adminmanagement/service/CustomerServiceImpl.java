package com.example.globalbank.adminmanagement.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.globalbank.adminmanagement.entity.Account;
import com.example.globalbank.adminmanagement.entity.Customer;
import com.example.globalbank.adminmanagement.repository.CustomerRepository;

@Service
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    AccountService accountService;

    @Override
    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }

    @Override
    public Boolean addAccount(Account account) {
        String customerNumber = account.getCustomerNumber();

        if (customerRepository.findById(customerNumber).isPresent()) {
            return accountService.addAccount(account);
        }

        return false;
    }

    @Override
    public Account deleteAccount(String accountNo) {
        return accountService.deleteAccount(accountNo);
    }
    
}
