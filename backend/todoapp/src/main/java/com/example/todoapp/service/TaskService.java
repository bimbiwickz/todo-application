package com.example.todoapp.service;

import com.example.todoapp.model.Task;
import com.example.todoapp.repository.TaskRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskService {

    private final TaskRepository repository;

    public TaskService(TaskRepository repository) {
        this.repository = repository;
    }

    public Task createTask(Task task) {
        return repository.save(task);
    }

    public List<Task> getRecentTasks() {
        return repository.findTop5ByCompletedFalseOrderByCreatedAtDesc();
    }

    public Optional<Task> markTaskDone(Long id) {
        Optional<Task> optionalTask = repository.findById(id);
        optionalTask.ifPresent(task -> {
            task.setCompleted(true);
            repository.save(task);
        });
        return optionalTask;
    }
}
