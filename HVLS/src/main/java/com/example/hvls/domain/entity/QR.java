package com.example.hvls.domain.entity;

import jakarta.persistence.*;

import java.sql.Date;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
public class QR {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private UUID uuid;

    @Column(columnDefinition = "timestamp")
    private LocalDateTime expirationDateTime;

    // getters and setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public UUID getUuid() {
        return uuid;
    }

    public void setUuid(UUID uuid) {
        this.uuid = uuid;
    }

    public LocalDateTime getExpirationDateTime() {
        return expirationDateTime;
    }

    public void setExpirationDateTime(LocalDateTime expirationDateTime) {
        this.expirationDateTime = expirationDateTime;
    }
}
