package com.example.globalbank.adminmanagement.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.globalbank.adminmanagement.entity.UserAdmin;
import com.example.globalbank.adminmanagement.repository.UserAdminRepository;

@Service
public class UserAdminServiceImpl implements UserAdminService {

    @Autowired
    UserAdminRepository userAdminRepository;

    @Override
    public Boolean authenticate(UserAdmin userAdmin) {
        
        String username = userAdmin.getUserName();
        String password = userAdmin.getPassword();

        if (userAdminRepository.findById(username).get().getPassword().equals(password)) {
            return true;
        }

        return false;
    }
    

}
