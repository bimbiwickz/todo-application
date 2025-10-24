package com.example.todoapp.controller;

import com.example.todoapp.model.Task;
import com.example.todoapp.service.TaskService;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {
    private final TaskService service;

    public TaskController(TaskService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<Task> createTask(@RequestBody Task task) {
        return ResponseEntity.ok(service.createTask(task));
    }

    @GetMapping
    public ResponseEntity<List<Task>> getRecentTasks() {
        return ResponseEntity.ok(service.getRecentTasks());
    }

    @PutMapping("/{id}/done")
    public ResponseEntity<Task> markTaskDone(@PathVariable Long id) {
        return service.markTaskDone(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
     
}
