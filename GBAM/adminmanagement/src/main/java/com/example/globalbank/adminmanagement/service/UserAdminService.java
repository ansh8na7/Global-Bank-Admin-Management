package com.example.globalbank.adminmanagement.service;

import com.example.globalbank.adminmanagement.entity.UserAdmin;

public interface UserAdminService {
    
    Boolean authenticate(UserAdmin userAdmin);
    
}
