package com.example.hvls.repository;

import com.example.hvls.domain.entity.House;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HouseRepository extends JpaRepository<House, Long> {
    House findByName(String name);
}
