package com.example.todoapp.model;

import java.time.LocalDateTime;
import lombok.*;
import jakarta.persistence.*;

@Entity
@Data 
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name ="task")
public class Task {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    private String title;
    private String description;
    private boolean completed = false;

    @Column(name = "created_at")
    private LocalDateTime createdAt = LocalDateTime.now();
}
