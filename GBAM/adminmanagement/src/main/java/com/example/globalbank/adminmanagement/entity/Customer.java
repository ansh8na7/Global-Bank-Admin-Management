package com.example.globalbank.adminmanagement.entity;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.lang.NonNull;

@Entity
@Table(name = "customer_master", schema = "bankdb")
public class Customer {

    @Id
    @Column(name = "customer_number", nullable = false, length = 6)
    @NonNull
    String customerNumber;

    @Column(name = "firstname", length = 30)
    String firstName;

    @Column(name = "middlename", length = 30)
    String middleName;

    @Column(name = "lastname", length = 30)
    String lastName;

    @Column(name = "customer_city", length = 15)
    String customerCity;

    @Column(name = "customer_contact_no", length = 10)
    String customerContactNo;

    @Column(name = "occupation", length = 20)
    String occupation;

    @Column(name = "customer_date_of_birth")
    Date customerDob;

    public Customer() {
    }

    public Customer(String customerNumber, String firstName, String middleName, String lastName, String customerCity,
            String customerContactNo, String occupation, Date customerDob) {
        this.customerNumber = customerNumber;
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.customerCity = customerCity;
        this.customerContactNo = customerContactNo;
        this.occupation = occupation;
        this.customerDob = customerDob;
    }

    public String getCustomerNumber() {
        return customerNumber;
    }

    public void setCustomerNumber(String customerNumber) {
        this.customerNumber = customerNumber;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getMiddleName() {
        return middleName;
    }

    public void setMiddleName(String middleName) {
        this.middleName = middleName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getCustomerCity() {
        return customerCity;
    }

    public void setCustomerCity(String customerCity) {
        this.customerCity = customerCity;
    }

    public String getCustomerContactNo() {
        return customerContactNo;
    }

    public void setCustomerContactNo(String customerContactNo) {
        this.customerContactNo = customerContactNo;
    }

    public String getOccupation() {
        return occupation;
    }

    public void setOccupation(String occupation) {
        this.occupation = occupation;
    }

    public Date getCustomerDob() {
        return customerDob;
    }

    public void setCustomerDob(Date customerDob) {
        this.customerDob = customerDob;
    }

    @Override
    public String toString() {
        return "Customer [customerNumber=" + customerNumber + ", firstName=" + firstName + ", middleName=" + middleName
                + ", lastName=" + lastName + ", customerCity=" + customerCity + ", customerContactNo="
                + customerContactNo + ", occupation=" + occupation + ", customerDob=" + customerDob + "]";
    }

    
}
