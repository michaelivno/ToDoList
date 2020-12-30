package com.mi.rest.restfulwebservices.configuration;

import com.mi.rest.restfulwebservices.repository.TaskRepository;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@Configuration
@EnableMongoRepositories(basePackageClasses = TaskRepository.class)
public class MongoDBConfig {
}
