package com.example.todoapp.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

import java.util.Arrays;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.*;

import com.example.todoapp.model.Task;
import com.example.todoapp.repository.TaskRepository;

public class TaskServiceTest {
        @Mock
    private TaskRepository taskRepository;

    @InjectMocks
    private TaskService taskService;

    @BeforeEach
    void setup() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testGetAllTasks() {
        List<Task> mockTasks = Arrays.asList(
                new Task(1L, "Task 1", "Description 1", false, null),
                new Task(2L, "Task 2", "Description 2", true, null)
        );
        when(taskRepository.findAll()).thenReturn(mockTasks);

        List<Task> tasks = taskService.getRecentTasks();

        assertEquals(2, tasks.size());
        verify(taskRepository, times(1)).findAll();
    }
}
