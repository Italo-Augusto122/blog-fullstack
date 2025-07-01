package com.blog.zzz_blog_login.config;

import java.text.SimpleDateFormat;
import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;

import com.blog.zzz_blog_login.domain.User;
import com.blog.zzz_blog_login.repositories.UserRepository;

@Configuration
public class Instantiation implements CommandLineRunner {

	@Autowired
	private UserRepository userRepo;
	
	@Override
	public void run(String... args) throws Exception {
		
		SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
		userRepo.deleteAll();
		
		User u1 = new User(null, "Italo", "senha1", sdf.parse("31/05/2005"), "img1", "char1");
		User u2 = new User(null, "Andressa", "senha2", sdf.parse("30/01/1998"), "img2", "char2");
		User u3 = new User(null, "Jessica", "senha3", sdf.parse("29/05/1996"), "img3", "char3");
		
		userRepo.saveAll(Arrays.asList(u1, u2, u3));
	}

}
