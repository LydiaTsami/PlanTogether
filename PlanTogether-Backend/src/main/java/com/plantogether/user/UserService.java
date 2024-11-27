package com.plantogether.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class UserService {

    @Autowired
    private UserRepository userRepository;

    public void registerUser(LoginRequest request){
        User user = new User();
        user.setUsername(request.username());
        user.setPassword(request.password());
        userRepository.save(user);
    }

//    public void loginUser(LoginRequest request){
//        userRepository.
//    }

}
