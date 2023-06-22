package com.MilkStgo.pagoproveedorservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class PagoproveedorServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(PagoproveedorServiceApplication.class, args);
	}

}
