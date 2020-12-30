package com.mi.rest.restfulwebservices.services;


import com.mi.rest.restfulwebservices.beans.Task;
import com.mi.rest.restfulwebservices.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.swing.*;
import java.util.*;

@Service
public class TaskService {

    private TaskRepository taskRepository;

    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }


    public Task createTask(Task taskTitle) {
        return taskRepository.save(taskTitle);
    }

    public List<Task> retrieveAllTasks() {
        return taskRepository.findAll();
    }

    public void deleteTask(Task task) {
        taskRepository.delete(task);
    }

    public void deleteAll() {
        taskRepository.deleteAll();
    }

    public Task updateTask(Task newTask) {
        return taskRepository.save(newTask);
    }

    public List<Task> sortByCreatedDate() {
        return createDateSorting();
    }

    public List<Task> sortByModifiedDate() {
        return modifiedDateSorting();
    }

    private List<Task> createDateSorting() {
        List<Task> tasks = taskRepository.findAll();
        Comparator<Task> comperByCDate = (Task t1, Task t2) -> t1.getCreatedDate().compareTo(t2.getCreatedDate());
        if (!tasks.isEmpty())
            tasks.sort(comperByCDate);
        return tasks;
    }

    private List<Task> modifiedDateSorting() {
        List<Task> tasks = taskRepository.findAll();
        Comparator<Task> comparByMDate = (Task t1, Task t2) -> t1.getLastModified().compareTo(t2.getLastModified());
        if (!tasks.isEmpty())
            tasks.sort(comparByMDate);
        return tasks;
    }
}
