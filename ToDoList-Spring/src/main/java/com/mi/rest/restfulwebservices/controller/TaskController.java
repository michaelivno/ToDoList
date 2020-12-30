package com.mi.rest.restfulwebservices.controller;


import com.mi.rest.restfulwebservices.beans.Task;
import com.mi.rest.restfulwebservices.services.TaskService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TaskController {

    private TaskService taskResource;

    public TaskController(TaskService taskResource) {
        this.taskResource = taskResource;
    }


    @GetMapping("/list")
    public List<Task> retrieveAllTasks() {
        return taskResource.retrieveAllTasks();
    }

    @GetMapping("/createdSort")
    public List<Task> createdSort() {
        return taskResource.sortByCreatedDate();
    }

    @GetMapping("/modifiedSort")
    public List<Task> modifiedSort() {
        return taskResource.sortByModifiedDate();
    }

    @PostMapping("/createTask")
    public Task createTask(@RequestBody Task taskName) {
        return taskResource.createTask(taskName);
    }

    @PutMapping("/update")
    public Task updateTask(@RequestBody Task task) {
        System.out.println(task);
        return taskResource.updateTask(task);
    }

    @PostMapping("/delete")
    public void deleteTask(@RequestBody Task task) {
        taskResource.deleteTask(task);
    }

    @DeleteMapping("/deleteAll")
    public void deleteAll() {
        taskResource.deleteAll();
    }

}

