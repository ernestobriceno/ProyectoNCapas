package com.example.hvls.controller;

import com.example.hvls.domain.entity.PermissionEntry;
import com.example.hvls.repository.PermissionEntryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/permission-entries")
public class PermissionEntryController {

    @Autowired
    private PermissionEntryRepository permissionEntryRepository;

    @PostMapping
    public PermissionEntry createPermissionEntry(@RequestBody PermissionEntry permissionEntry) {
        return permissionEntryRepository.save(permissionEntry);
    }

    @GetMapping("/{id}")
    public PermissionEntry getPermissionEntryById(@PathVariable Long id) {
        return permissionEntryRepository.findById(id).orElse(null);
    }

    @PutMapping("/{id}")
    public PermissionEntry updatePermissionEntry(@PathVariable Long id, @RequestBody PermissionEntry updatedPermissionEntry) {
        updatedPermissionEntry.setId(id);
        return permissionEntryRepository.save(updatedPermissionEntry);
    }

    @DeleteMapping("/{id}")
    public void deletePermissionEntry(@PathVariable Long id) {
        permissionEntryRepository.deleteById(id);
    }
}
