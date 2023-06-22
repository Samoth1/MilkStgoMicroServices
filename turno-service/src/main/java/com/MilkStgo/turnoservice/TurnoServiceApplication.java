package com.MilkStgo.turnoservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class TurnoServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(TurnoServiceApplication.class, args);
	}

}
