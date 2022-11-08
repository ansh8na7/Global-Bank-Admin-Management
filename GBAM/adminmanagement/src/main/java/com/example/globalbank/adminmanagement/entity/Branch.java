package com.example.globalbank.adminmanagement.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.lang.NonNull;

@Entity
@Table(name = "branch_master", schema = "bank_schema")
public class Branch {
    
    @Id
    @Column(name = "branch_id", nullable = false, length = 6)
    @NonNull
    String branchId;

    @Column(name = "branch_name", length = 30)
    String branchName;

    @Column(name = "branch_city", length = 30)
    String branchCity;

    public Branch(String branchId, String branchName, String branchCity) {
        this.branchId = branchId;
        this.branchName = branchName;
        this.branchCity = branchCity;
    }

    public String getBranchId() {
        return branchId;
    }

    public void setBranchId(String branchId) {
        this.branchId = branchId;
    }

    public String getBranchName() {
        return branchName;
    }

    public void setBranchName(String branchName) {
        this.branchName = branchName;
    }

    public String getBranchCity() {
        return branchCity;
    }

    public void setBranchCity(String branchCity) {
        this.branchCity = branchCity;
    }

    @Override
    public String toString() {
        return "Branch [branchId=" + branchId + ", branchName=" + branchName + ", branchCity=" + branchCity + "]";
    }

    
}
