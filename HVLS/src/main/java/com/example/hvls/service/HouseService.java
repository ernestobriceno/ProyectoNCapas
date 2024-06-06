package com.example.hvls.service;

import com.example.hvls.domain.entity.House;
import com.example.hvls.repository.HouseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HouseService {

    @Autowired
    private HouseRepository houseRepository;

    public House saveHouse(House house) {
        return houseRepository.save(house);
    }

    public List<House> getAllHouses() {
        return houseRepository.findAll();
    }

    public House getHouseById(Long id) {
        return houseRepository.findById(id).orElse(null);
    }

    public void deleteHouse(Long id) {
        houseRepository.deleteById(id);
    }

}
