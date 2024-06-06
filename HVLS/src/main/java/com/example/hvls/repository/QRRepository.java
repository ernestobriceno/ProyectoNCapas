package com.example.hvls.repository;

import com.example.hvls.domain.entity.QR;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QRRepository extends JpaRepository<QR, Long> {

}