package com.blog.zzz_blog_login.services;

import java.util.Arrays;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.blog.zzz_blog_login.domain.User;

@Service
public class UserService {

	public List<User> findAll() {
		User u1 = new User("1", "User1", "password1", new Date(), "img1", "char1");
		User u2 = new User("2", "User2", "password2", new Date(), "img2", "char2");
		User u3 = new User("3", "User3", "password3", new Date(), "img3", "char3");

		return Arrays.asList(u1, u2, u3);
	}
}