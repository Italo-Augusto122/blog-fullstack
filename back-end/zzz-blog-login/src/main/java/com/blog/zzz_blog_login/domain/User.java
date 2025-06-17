package com.blog.zzz_blog_login.domain;

import java.io.Serializable;
import java.util.Date;
import java.util.Objects;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collation = "user")
public class User implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id
	private String id;
	private String username;
	private String password;
	private Date birthDate;
	private String profileImage;
	private String favoriteCharacter;
	
	public User() {}
	public User(String id, String username, String password, Date birthDate, String profileImage,
			String favoriteCharacter) {
		super();
		this.id = id;
		this.username = username;
		this.password = password;
		this.birthDate = birthDate;
		this.profileImage = profileImage;
		this.favoriteCharacter = favoriteCharacter;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Date getBirthDate() {
		return birthDate;
	}

	public void setBirthDate(Date birthDate) {
		this.birthDate = birthDate;
	}

	public String getProfileImage() {
		return profileImage;
	}

	public void setProfileImage(String profileImage) {
		this.profileImage = profileImage;
	}

	public String getFavoriteCharacter() {
		return favoriteCharacter;
	}

	public void setFavoriteCharacter(String favoriteCharacter) {
		this.favoriteCharacter = favoriteCharacter;
	}

	@Override
	public int hashCode() {
		return Objects.hash(password, username);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		User other = (User) obj;
		return Objects.equals(password, other.password) && Objects.equals(username, other.username);
	}
}
