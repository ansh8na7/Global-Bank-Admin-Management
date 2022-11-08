package com.example.globalbank.adminmanagement.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.globalbank.adminmanagement.entity.Branch;
import com.example.globalbank.adminmanagement.repository.BranchRepository;

@Service
public class BranchServiceImpl implements BranchService {

    @Autowired
    BranchRepository branchRepository;

    @Override
    public List<Branch> getAllBranches() {
        return branchRepository.findAll();
    }

    @Override
    public Boolean addBranch(Branch branch) {
        String branchId = branch.getBranchId();

        if (branchRepository.findById(branchId).isPresent()) {
            return false;
        }
        
        branchRepository.save(branch);
        return true;
    }
    
}
