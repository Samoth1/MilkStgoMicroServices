package com.MilkStgo.lecheservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class LecheServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(LecheServiceApplication.class, args);
	}

}
