package com.example.hvls.controller;

import com.example.hvls.domain.entity.QR;
import com.example.hvls.service.QRService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/qr")
public class QRController {

    @Autowired
    private QRService qrService;

    @PostMapping("/create")
    public QR createQR() {
        return qrService.createQR();
    }
}
