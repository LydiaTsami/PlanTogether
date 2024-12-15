package com.plantogether.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    private static final String USER_ROLE="ROLE_USER";
    @Autowired
    private PasswordEncoder encoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username);
        if (user == null) {
            throw new UsernameNotFoundException("User not found with username: " + username);
        }
        return new org.springframework.security.core.userdetails.User(
                user.getUsername(),
                user.getPassword(),
                Stream.of(user.getRoles().split(","))
                        .map(SimpleGrantedAuthority::new)
                        .collect(Collectors.toList())
        );
    }

    public String addUser(User user) {
        // Encode password before saving the user
        user.setPassword(encoder.encode(user.getPassword()));
        user.setRoles(USER_ROLE);
        userRepository.save(user);
        return "User Added Successfully";
    }

}
