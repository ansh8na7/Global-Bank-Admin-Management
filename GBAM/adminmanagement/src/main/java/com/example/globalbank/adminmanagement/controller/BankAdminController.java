package com.example.globalbank.adminmanagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.globalbank.adminmanagement.entity.Account;
import com.example.globalbank.adminmanagement.entity.Branch;
import com.example.globalbank.adminmanagement.entity.UserAdmin;
import com.example.globalbank.adminmanagement.service.BranchService;
import com.example.globalbank.adminmanagement.service.CustomerService;
import com.example.globalbank.adminmanagement.service.UserAdminService;

@RestController
public class BankAdminController {

    @Autowired
    CustomerService customerService;

    @Autowired
    BranchService branchService;

    @Autowired
    UserAdminService userAdminService;

    @PostMapping("/api/login")
    public Boolean adminLogin(@RequestBody UserAdmin userAdmin) {
        return userAdminService.authenticate(userAdmin);
    }

    @GetMapping("/api/admin/customers")
    public List<Account> getCustomers() {
        return customerService.getAllCustomers();
    }

    @GetMapping("/api/admin/branches")
    public List<Branch> getBranches() {
        return branchService.getAllBranches();
    }

    @PostMapping("/api/admin/customers/account") 
    public Boolean addAccount(@RequestBody Account account) {
        return customerService.addAccount(account);
    }

    @PostMapping("/api/admin/branches") 
    public Boolean addBranch(@RequestBody Branch branch) {
        return branchService.addBranch(branch);
    }

    @DeleteMapping("/api/admin/customers/account/{account_no}")
    public Account deleteAccount(@PathVariable("account_no") String accountNo) {
        return customerService.deleteAccount(accountNo);
    }

    @DeleteMapping("/api/admin/branches/{branch_id}")
    public Branch deleteBranch(@PathVariable("branch_id") String branchId) {
        return branchService.deleteBranch(branchId);
    }
}
