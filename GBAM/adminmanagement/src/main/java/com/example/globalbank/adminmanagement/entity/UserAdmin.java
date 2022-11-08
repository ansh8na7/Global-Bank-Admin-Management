package com.example.globalbank.adminmanagement.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.lang.NonNull;

@Entity
@Table(name = "user_admin", schema = "bankdb")
public class UserAdmin {

    @Id
    @Column(name = "username_admin", nullable = false, length = 20)
    @NonNull
    String userName;

    @Column(name = "password_admin", nullable = false, length = 20)
    @NonNull
    String password;

    public UserAdmin() {
    }

    public UserAdmin(String userName, String password) {
        this.userName = userName;
        this.password = password;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "UserAdmin [userName=" + userName + ", password=" + password + "]";
    }
}
