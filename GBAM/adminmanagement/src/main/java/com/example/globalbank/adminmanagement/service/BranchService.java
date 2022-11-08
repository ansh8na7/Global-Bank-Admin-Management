package com.example.globalbank.adminmanagement.service;

import java.util.List;

import com.example.globalbank.adminmanagement.entity.Branch;

public interface BranchService {

    List<Branch> getAllBranches();

    Boolean addBranch(Branch branch);
    
}
