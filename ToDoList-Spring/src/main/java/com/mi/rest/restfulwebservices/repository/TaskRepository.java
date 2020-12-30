package com.mi.rest.restfulwebservices.repository;

import com.mi.rest.restfulwebservices.beans.Task;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;


public interface TaskRepository extends MongoRepository<Task, String> {

}
