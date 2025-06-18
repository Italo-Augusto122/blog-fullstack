package com.blog.zzz_blog_login.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.blog.zzz_blog_login.domain.User;

@Repository
public interface UserRepository extends MongoRepository<User, String> {

}
