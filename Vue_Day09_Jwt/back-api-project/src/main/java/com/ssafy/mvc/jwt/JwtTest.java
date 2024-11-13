package com.ssafy.mvc.jwt;

import java.nio.charset.StandardCharsets;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.crypto.SecretKey;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

public class JwtTest {
	public static void main(String[] args) throws InterruptedException {
		// 비밀 키
		String key = "SSAFY_NonMajor_JavaTrack_SecretKey";
		SecretKey secretKey = Keys.hmacShaKeyFor(key.getBytes(StandardCharsets.UTF_8));

		Map<String, String> headers = new HashMap<>();
		headers.put("typ", "JWT");

		// JWT 3가지 헤더 / 페이로드(데이터) / 서명
		String token = Jwts.builder() // JWT를 만들 수 있는 빌더를 쓰게 되었음
				.header() // 빌더 헤더를 만드는 객체가 됨
				.add("name", "choi").add(headers).and() // JWT 빌더로 돌아감
				.subject("ssafy").expiration(new Date(System.currentTimeMillis() + 3000)) // 현재시간 기준 3초까지
				.signWith(secretKey) // 서명 완료
				.compact();
		System.out.println(token);

	}
}
