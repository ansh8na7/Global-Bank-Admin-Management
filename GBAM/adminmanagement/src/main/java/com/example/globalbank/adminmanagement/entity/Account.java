package com.example.globalbank.adminmanagement.entity;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.lang.NonNull;

@Entity
@Table(name = "account_master", schema = "bank_schema")
public class Account {

    @Id
    @Column(name = "account_number", nullable = false, length = 6)
    @NonNull
    String accountNumber;

    @Column(name = "customer_number", length = 6)
    @NonNull
    String customerNumber;

    @Column(name = "branch_id", length = 6)
    @NonNull
    String branchId;

    @Column(name = "opening_balance")
    Long openingBalance;

    @Column(name = "account_opening_date")
    Date accountOpeningDate;

    @Column(name = "account_type", length = 10)
    String accountType;

    @Column(name = "account_status", length = 10)
    String accountStatus;

    public Account(String accountNumber, String customerNumber, String branchId, Long openingBalance,
            Date accountOpeningDate, String accountType, String accountStatus) {
        this.accountNumber = accountNumber;
        this.customerNumber = customerNumber;
        this.branchId = branchId;
        this.openingBalance = openingBalance;
        this.accountOpeningDate = accountOpeningDate;
        this.accountType = accountType;
        this.accountStatus = accountStatus;
    }

    public String getAccountNumber() {
        return accountNumber;
    }

    public void setAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
    }

    public String getCustomerNumber() {
        return customerNumber;
    }

    public void setCustomerNumber(String customerNumber) {
        this.customerNumber = customerNumber;
    }

    public String getBranchId() {
        return branchId;
    }

    public void setBranchId(String branchId) {
        this.branchId = branchId;
    }

    public Long getOpeningBalance() {
        return openingBalance;
    }

    public void setOpeningBalance(Long openingBalance) {
        this.openingBalance = openingBalance;
    }

    public Date getAccountOpeningDate() {
        return accountOpeningDate;
    }

    public void setAccountOpeningDate(Date accountOpeningDate) {
        this.accountOpeningDate = accountOpeningDate;
    }

    public String getAccountType() {
        return accountType;
    }

    public void setAccountType(String accountType) {
        this.accountType = accountType;
    }

    public String getAccountStatus() {
        return accountStatus;
    }

    public void setAccountStatus(String accountStatus) {
        this.accountStatus = accountStatus;
    }

    @Override
    public String toString() {
        return "Customer [accountNumber=" + accountNumber + ", customerNumber=" + customerNumber + ", branchId="
                + branchId + ", openingBalance=" + openingBalance + ", accountOpeningDate=" + accountOpeningDate
                + ", accountType=" + accountType + ", accountStatus=" + accountStatus + "]";
    }
    
    
}
