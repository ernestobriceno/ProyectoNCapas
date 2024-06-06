package com.example.hvls.controller;

import com.example.hvls.domain.entity.House;
import com.example.hvls.service.HouseService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/houses")
public class HouseController {

    private final HouseService houseService;

    public HouseController(HouseService houseService) {
        this.houseService = houseService;
    }

    @PostMapping("/create")
    public ResponseEntity<House> createHouse(@RequestBody House house) {
        House savedHouse = houseService.saveHouse(house);
        return ResponseEntity.ok(savedHouse);
    }

    @GetMapping("/all")
    public List<House> getAllHouses() {
        return houseService.getAllHouses();
    }

    @GetMapping("/{id}")
    public ResponseEntity<House> getHouseById(@PathVariable Long id) {
        House house = houseService.getHouseById(id);
        return house != null ? ResponseEntity.ok(house) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteHouse(@PathVariable Long id) {
        houseService.deleteHouse(id);
        return ResponseEntity.noContent().build();
    }

}
