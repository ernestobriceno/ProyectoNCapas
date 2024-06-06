package com.example.hvls.service;

import com.example.hvls.domain.entity.QR;
import com.example.hvls.repository.QRRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.UUID;

@Service
public class QRService {

    @Autowired
    private QRRepository qrRepository;

    public QR createQR() {
        QR qr = new QR();
        qr.setUuid(UUID.randomUUID()); // genera un UUID aleatorio
        qr.setExpirationDateTime(calculateExpirationDateTime()); // calcula la fecha y hora de expiración
        return qrRepository.save(qr);
    }

    private LocalDateTime calculateExpirationDateTime() {
        LocalDateTime now = LocalDateTime.now();
        now = now.plusDays(30); // expira en 30 días
        now = now.withHour(14); // expira a las 14:00 horas
        now = now.withMinute(30); // expira a las 14:30 horas
        return now;
    }
}

